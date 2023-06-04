import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// import Home from './src/screens/Home';
import Destination from './src/screens/Destination';
import Recommendations from './src/screens/Recommendations';
import Checkout from './src/screens/Checkout';
import SingleFlight from './src/screens/SingleFlight';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import SingleHotel from './src/screens/SingleHotel';
import Flights from './src/screens/Flights';
import Accomodation from './src/screens/Accomodation'
import Home from './src/screens/HomePlace';
import Navigator from './src/screens/StackNavigation';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
    <Tab.Navigator
      initialRouteName="Navigator"
      activeColor="#000"
      barStyle={{ backgroundColor: '#FFF',
      borderTopLeftRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      borderColor: 'green',
      borderWidth: 1,
     }}
     screenOptions={{ independent: true }}
    >
      <Tab.Screen
        name="Navigator"
        component={Navigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Destination"
        component={Destination}
        options={{
          tabBarLabel: 'Places',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Flights}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  
    </NavigationContainer>
  );
};

export default App;
