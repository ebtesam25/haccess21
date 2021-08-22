import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Splash() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
  

      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ alignSelf:'center', marginTop:'25%' }}>
              <View style={{alignSelf:'center'}}>
                <Text style={{fontFamily:'A', fontSize:15, color:'#1a2a94', textAlign:'center'}}>HANDICAPABLE</Text>
                <Text style={{fontFamily:'A', fontSize:65, color:'#1a2a94', textAlign:'center'}} onPress={()=>navigation.navigate('Login')}>Welcome</Text>
              </View>
              <Image source={require('../assets/splash.png')} style={{width:800, height:700, resizeMode:'contain', position:'absolute', left:-350, bottom:-800}}></Image>

              
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});