import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from './../screens/Login';
import SingleHotel from '../screens/SingleHotel';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const NavBar = () => {
  return (
      <Tab.Navigator initialRouteName="Login" 
      screenOptions={({route}) => {
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Login') {
                iconName = 'home';
                } else if (route.name === 'SingleHotel') {
                    iconName = 'hotel';
                    }
                    return <Ionicons name={iconName} size={size} />
        }
      }}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Hotel Details" component={SingleHotel} />
        <Tab.Screen name="Logi1" component={Login} />
        <Tab.Screen name="Hotel Detail1s" component={SingleHotel} />
      </Tab.Navigator>
   
  );
};
const styles = new StyleSheet.create({});
export default NavBar;
