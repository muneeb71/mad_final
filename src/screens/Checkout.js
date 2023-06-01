import {View, Text, StyleSheet, Pressable, TextInput, ScrollView, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Checkout = () => {
  return (
    
        <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.head}>
        <Text style={styles.text_main}>Checkout Details</Text>
        <View style={styles.payment_text_view}>
          <Text style={[styles.payment_text , {fontSize: 16, marginTop: 16}]}>
            For Payment:
          </Text>
          <View>
            <Text
              style={
                [styles.payment_text , {
                  fontWeight: 800,
                  fontSize: 22,
                  marginTop: 4,
                  color: 'black',
                }]
              }>
              $100.00
            </Text>
            <Text style={[styles.payment_text , {fontSize: 12}]}>
              Including Tax (21%)
            </Text>
          </View>
        </View>
        <View>
          <Pressable style={styles.button}>
            <Icon name="card-outline" size={26} color="white" />
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
              <Image source={require('./../assets/visa.png')} style={{height: 40, width: 40, position: 'absolute', top: '52%', right: '12%'}} />
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
              <Icon name='lock-closed' size={22} color="white" style={{marginRight: 10}}/>
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
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    fontWeight: 500,
    padding: 10,
    color: 'black',
    marginLeft: 10,
  },
  head: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#EAECEE',
    height: '28%',
    borderWidth: 1,
    borderColor: '#0D986A',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  payment_text_view: {
    fontFamily: 'Poppins-Regular',
    padding: 20,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  payment_text: {
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
    fontSize: 24,
    color: '#929DA9'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#0D986A',
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: '53%',
    borderRadius: 10,
  },
  btn_text: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  form: {
    fontFamily: 'Poppins-Regular',
    padding: 8,
    marginTop: 22,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'black',
    marginBottom: 6,
    marginLeft: 10,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#EAECEE',
    paddingVertical: 12,
    paddingHorizontal: 15,
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
