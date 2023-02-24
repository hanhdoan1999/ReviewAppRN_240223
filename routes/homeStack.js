import React from 'react';
import HomePage from '../screens/HomePage';
import ReviewDetails from '../screens/ReviewDetails';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();
function homeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
         name="Home" 
         component={HomePage}
         options={()=>({
          title: 'Awesome app',
          headerStyle: { backgroundColor: 'tomato' },
          headerShown: false
         })}
          /> 
        <Stack.Screen name="ReviewDetail" 
        component={ReviewDetails}
        options={()=>({
          headerShown: false
         })} />
      </Stack.Navigator>
  );
}

export default homeStack;