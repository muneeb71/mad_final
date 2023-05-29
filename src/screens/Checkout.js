import {View, Text, StyleSheet, Pressable, TextInput, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Checkout = () => {
  return (
    
        <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.head}>
        <Text style={styles.text_main}>Checkout Details</Text>
        <View style={styles.payment_text_view}>
          <Text style={[styles.payment_text && {fontSize: 16, marginTop: 16}]}>
            For Payment:{' '}
          </Text>
          <View>
            <Text
              style={
                styles.payment_text && {
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginTop: 4,
                  color: 'black',
                }
              }>
              $100.00
            </Text>
            <Text style={[styles.payment_text && {fontSize: 14}]}>
              Including Tax (21%){' '}
            </Text>
          </View>
        </View>
        <View>
          <Pressable style={styles.button}>
            <Icon name="add" size={18} />
            <Text style={styles.btn_text}>Credit Card</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <View style={styles.form}>
          <View style={{padding: 10}}>
            <Text style={styles.label}>Card number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Card number"
              onChangeText={text => {}}></TextInput>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.label}>Card Holder Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              onChangeText={text => {}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', width: '100%',}}>
          <View style={{padding: 10, width: '50%'}}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder="11 / 2023"
              onChangeText={text => {}}></TextInput>
          </View>
          <View style={{padding: 10, width: '50%'}}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              placeholder="XXX"
              onChangeText={text => {}}></TextInput>
          </View>
          </View>
          <View style={styles.button_view}>
            <Pressable style={styles.button}>
              <Text style={styles.btn_text}>PAY FOR BOOKING</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
    
  );
};
const styles = new StyleSheet.create({
  text_main: {
    fontFamily: 'poppins',
    fontSize: 20,
    fontWeight: 500,
    padding: 10,
    color: 'black',
    marginLeft: 10,
  },
  head: {
    backgroundColor: '#EAECEE',
    height: '25%',
    borderWidth: 1,
    borderColor: '#0D986A',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  payment_text_view: {
    padding: 20,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  payment_text: {
    marginTop: 16,
    fontSize: 22,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#0D986A',
    padding: 12,
    width: '50%',
    borderRadius: 10,
  },
  btn_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  form: {
    padding: 8,
    marginTop: 22,
  },
  label: {
    fontSize: 18,
    color: 'black',
    marginBottom: 6,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#EAECEE',
    padding: 12,
    width: '95%',
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#0D986A',
    borderRadius: 16,
    borderColor: '#D9D9D9',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    marginBottom: 12
  },
});
export default Checkout;
