import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SingleHotel from './SingleHotel';
import Flights from './Flights';
import SingleFlight from './SingleFlight';
import Checkout from './Checkout';
import Accomodation from './Accomodation';
import Home from './HomePlace';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        independent: true,
        headerShown: false
    }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Accomodation"
        component={Accomodation}
      />
      <Stack.Screen
        name="Single Hotel"
        component={SingleHotel}
      />
      <Stack.Screen
        name="Flights"
        component={Flights}
      />
      <Stack.Screen
        name="Single Flight"
        component={SingleFlight}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
