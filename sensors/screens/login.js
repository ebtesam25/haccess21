import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';





export default function Login({}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
    if (!fontLoaded) {
        return null;
      }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: '30%'}}>
            <Text style={{fontFamily:'A', fontSize:65, color:'#1a2a94', textAlign:'center'}} onPress={()=>navigation.navigate('Login')}>Login</Text>

           
              <View style={{marginTop:'10%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
                 <View style={{marginHorizontal:'10%', marginTop:'10%'}}>
                <Text style={{fontFamily:'A', fontSize:20}}>Email Address</Text>
                <TextInput style={{borderColor:'#1a2a94', width:'100%', borderRadius:10, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#1a2a94'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:20}}>Password</Text>
                <TextInput secureTextEntry style={{borderColor:'#1a2a94', width:'100%', borderRadius:10, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#1a2a94'}}></TextInput>
                </View>    
                <TouchableOpacity onPress={()=>navigation.navigate('Options')}><Text style={{fontFamily:'A', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#1a2a94', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:0, marginTop:'15%'}}>
                    LOGIN
                 </Text></TouchableOpacity>

                 <View style={{flexDirection:'row', display:'flex', marginTop:'10%', alignSelf:'center'}}>
                 <Text style={{fontFamily:'A', fontSize:17, textAlign:'center'}}>or sign up</Text>
                 <TouchableOpacity><Text style={{fontFamily:'A', fontSize:17, textAlign:'center', color:'#1a2a94'}} onPress={()=>navigation.navigate('Register')}> here</Text></TouchableOpacity>
                </View>

              </View>
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
        height: '75%',
        width: '100%',
        marginTop: '5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});