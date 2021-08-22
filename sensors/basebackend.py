import os
import pymongo
import json
from dtw import *



def dist(ser1, ser2):
    

    l1 = [x * 100.0 for x in ser1]
    l2 = [x * 100.0 for x in ser2]

    ds = dtw(l1, l2)

    return 100.0 - ds.distance





def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()
    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["handicapable"]


    col = db.users

    maxid = 1

    for x in col.find():
        maxid = maxid+1


    action =  request_json['action']


    if action == "rawdistanceone":
        ref =  request_json['reference']
        qer = request_json['query']

        ser1 = []
        for x in ref:
            ser1.append(float(x))
        ser2 = []
        for x in qer:
            ser2.append(float(x))
            
        sim = dist(ser1, ser2)

        retjson = {}

        retjson['similarity'] = sim
        retjson['action'] = action
        
        retjson['mongoresult'] = str(maxid)

        return json.dumps(retjson)


    if action == "rawdistancethree":
        refx =  request_json['referencex']
        qerx = request_json['queryx']

        refy =  request_json['referencey']
        qery = request_json['queryy']

        refz =  request_json['referencez']
        qerz = request_json['queryz']



        ser1 = []
        for x in refx:
            ser1.append(float(x))
        ser2 = []
        for x in qerx:
            ser2.append(float(x))
            
        simx = dist(ser1, ser2)

        ser1 = []
        for x in refy:
            ser1.append(float(x))
        ser2 = []
        for x in qery:
            ser2.append(float(x))
            
        simy = dist(ser1, ser2)


        ser1 = []
        for x in refz:
            ser1.append(float(x))
        ser2 = []
        for x in qerz:
            ser2.append(float(x))
            
        simz = dist(ser1, ser2)


        sim = (simx + simy + simz)/3.0


        retjson = {}

        retjson['similarity'] = sim
        retjson['action'] = action
        
        retjson['mongoresult'] = str(maxid)

        return json.dumps(retjson)








    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
