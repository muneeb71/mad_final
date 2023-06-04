// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Login from './../screens/Login';
// import SingleHotel from '../screens/SingleHotel';
// import {NavigationContainer} from '@react-navigation/native';

// const Tab = createMaterialBottomTabNavigator();

// const NavBar = () => {
//   return (
//       <Tab.Navigator initialRouteName="Login"
//       screenOptions={({route}) => {
//         tabBarIcon: ({focused, color, size}) => {
//             let iconName;
//             if (route.name === 'Login') {
//                 iconName = 'home';
//                 } else if (route.name === 'SingleHotel') {
//                     iconName = 'hotel';
//                     }
//                     return <Ionicons name={iconName} size={size} />
//         }
//       }}
//       >
//         <Tab.Screen name="Login" component={Login} />
//         <Tab.Screen name="Hotel Details" component={SingleHotel} />
//         <Tab.Screen name="Logi1" component={Login} />
//         <Tab.Screen name="Hotel Detail1s" component={SingleHotel} />
//       </Tab.Navigator>

//   );
// };
// const styles = new StyleSheet.create({});
// export default NavBar;
import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const NavBar = ({navigation}) => {
  const handleHomeIconPress = () => {
    navigation.navigate('Home');
  };
  const handleChatIconPress = () => {
    navigation.navigate('ChatBot');
  };
  const handleRecmIconPress = () => {
    navigation.navigate('Recommendation');
  };
  const handleProfileIconPress = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.icons}>
      <TouchableOpacity onPress={handleHomeIconPress}>
        <Image source={require('./../assets/homeicon.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleChatIconPress}>
        <Image source={require('./../assets/chaticon.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRecmIconPress}>
        <Image source={require('./../assets/recm.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfileIconPress}>
        <Image
          source={require('./../assets/profileicon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  icons: {
    alignSelf: 'center',
    marginTop: 27,
    marginBottom: 20,
    width: 381,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    position: 'relative',
  },
  icon: {
    height: 42,
    width: 44,
  },
});

export default NavBar;
