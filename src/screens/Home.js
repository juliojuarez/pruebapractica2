import React from 'react';
import {View,Text,Button} from 'react-native';
export default function Home(props){
    const{navigation}=props;
 return(
 <View>
 <Text> PRACTICO 2 JULIO JUAREZ </Text>
 <button title='Ir SUMA' onProgress={()=>navigation.navigate('suma')}>
     
 </button>
 </View>
 );
}
