import React from 'react';
import HomePage from '../screens/HomePage';
import ReviewDetails from '../screens/ReviewDetails';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function aboutStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
         name="About" 
         component={About}
         options={{
          title: 'About',
          headerStyle: { backgroundColor: 'tomato' },
          headerShown: false
         }}
          /> 
      </Stack.Navigator>
  );
}

export default aboutStack;