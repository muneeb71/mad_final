import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Destination from './src/screens/Destination';
import Recommendations from './src/screens/Recommendations';
import Checkout from './src/screens/Checkout';
import SingleFlight from './src/screens/SingleFlight';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import SingleHotel from './src/screens/SingleHotel';
import Flights from './src/screens/Flights';
import Accomodation from './src/screens/Accomodation'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#000"
      barStyle={{ backgroundColor: '#FFF', borderRadius: 5, borderWidth: 1,
     }}
    >
      <Tab.Screen
        name="Feed"
        component={Recommendations}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Flights}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Flights}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  
    </NavigationContainer>
  );
};

export default App;
