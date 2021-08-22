import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
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
    if(a==1){
    setUpdateIntervalForType(SensorTypes.accelerometer, 300); // defaults to 100ms
    console.log(SensorTypes.accelerometer);
    }

 

    const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
  console.log({ x, y, z, timestamp }));

  setTimeout(() => {
    subscription.unsubscribe();
    
  }, 1000);
    
  }
    




export default function Exercise() {

  return (
    <View style={styles.container}>
      <Button title="Start" style={{backgroundColor:'#000', width:'50%', height:'20%'}} onPress={()=>{console.log("Start Arm out retract");_runSensors(1)}} ></Button>
      <Button title="Stop" style={{backgroundColor:'#000', width:'50%', height:'20%'}} onPress={()=>{console.log("Stop")}} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
