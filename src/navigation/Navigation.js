import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Suma from '../screens/Suma';
import Resta from '../screens/Resta';
import Multiplicacion from '../screens/Multiplicacion';
import Divide from '../screens/Divide';
const Stack = createStackNavigator();
export default function Navigation(){
 return(
 <Stack.Navigator>
 <Stack.Screen name="home" component={Home} options={{title:'Home'}}/>
 <Stack.Screen name="suma" component={Suma} options={{title:'Suma'}}/>
 <Stack.Screen name="resta" component={Resta} options={{title:'Resta'}}/>
 <Stack.Screen name="multiplicacion" component={Multiplicacion} options={{title:'Multiplicacion'}}/>
 <Stack.Screen name="divide" component={Divide} options={{title:'Divide'}}/>
 </Stack.Navigator>
 );
}