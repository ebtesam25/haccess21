import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes
} from "react-native-sensors";
import { map, filter } from "rxjs/operators";


const _runSensors = (a) => {
  var i = 0;
  if(a==1){
  setUpdateIntervalForType(SensorTypes.accelerometer, 300); // defaults to 100ms
  console.log(SensorTypes.accelerometer);
  }


  


  const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>{
console.log({ x, y, z, timestamp });
i++;});

if(i==5){
  subscription.unsubscribe();
}

setTimeout(() => {
  subscription.unsubscribe();
  
}, 1300);
  
}
  

export default function App() {
  const exerciseList = ["Rotate wrist clockwise",
  "Rotate wrist counterclockwise",
  "Bend wrist left",
  "Bend wrist right"];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const _getScore = () => {
    setScore(Math.floor(Math.random()* (80 - 0) + 0 * 10))

  }

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "action": "rawdistancethree",
  "referencex": [
    2.3,
    4.4,
    9.3,
    2.1,
    1.1
  ],
  "queryx": [
    0.3,
    4.4,
    6.3,
    1.1,
    3.1
  ],
  "referencey": [
    2.3,
    4.4,
    9.3,
    2.1,
    1.1
  ],
  "queryy": [
    0.3,
    4.4,
    6.3,
    1.1,
    3.1
  ],
  "referencez": [
    2.3,
    4.4,
    9.3,
    2.1,
    1.1
  ],
  "queryz": [
    0.3,
    4.4,
    6.3,
    1.1,
    3.1
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://us-central1-aiot-fit-xlab.cloudfunctions.net/handicapablehelper", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  return (
    <View style={styles.container}>
      <Text style={{color:'#ffff', fontSize:15, marginBottom:'5%'}}>{score>50 ? 'Good Job!': 'Sorry, try again!'}</Text>
      <Text style={{color:'#ffff', fontSize:30}}>{exerciseList[index]}</Text>
      <Button title="Start" style={{backgroundColor:'#000', width:'50%', height:'20%'}} onPress={()=>{console.log("Start "+ exerciseList[index]);_runSensors(1)}} ></Button>
      <Button title="Stop" style={{backgroundColor:'#000', width:'50%', height:'20%'}} onPress={()=>{console.log("Stop");setIndex(Math.floor(Math.random()* (3 - 0) + 0 * 10));_getScore();}} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2a94',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
