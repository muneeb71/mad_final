import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.parent}>
      <View style={styles.main}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('ProductsList');
          }}>
          <Text style={styles.text}>Manage Products</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text
            style={styles.text}
            onPress={() => {
              navigation.navigate('EmployeesList');
            }}>
            Manage Employees
          </Text>
        </Pressable>
        <Pressable
        style={styles.button}
          onPress={() => {
            navigation.navigate('OrdersList');
          }}>
          <Text style={styles.text}>Manage Orders</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    padding: 22,
    borderRadius: 5,
    backgroundColor: '#e8e8e8',
    width: '100%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  text: {
    fontSize: 18,
    color: '#454545',
    alignSelf: 'center',
  },
});
export default Home;
