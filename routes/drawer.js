import React from 'react';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screens/HomePage';
import About from '../screens/About';
import { NavigationContainer } from '@react-navigation/native';
import homeStack from './homeStack';
import ReviewDetails from '../screens/ReviewDetails';
import aboutStack from './aboutStack';

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

function drawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default drawer;