import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  Platform,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StripeSdk } from '@stripe/stripe-react-native';

const Checkout = ({navigation, route}) => {
  const price = route.params.price;
  const [cardNo, setCardNo] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  // StripeSdk.init({
  //   publishableKey:
  //     'pk_test_51MVfXYFHvSIYX4YkgRxIulY8rKscA1pVRphVZAd8ighnDtwI0hssm6glKez5oaHEmKzGd2F1VoVfZ7IkG7uWSlsD00xCn3XZnzY',
  // });
  
    const handlePayment = async () => {
      try {
        // const paymentMethod = await StripeSdk.createPaymentMethod({
        //   type: 'Card',
        //   card: {
        //     number: cardNo,
        //     expMonth: 12,
        //     expYear: 2023,
        //     cvc: cvv,
        //   },
        // });
        if(!cardNo || !cvv  || !expiry || !cardHolder){
          ToastAndroid.show(
            'Please Fill All Fields!',
            ToastAndroid.BOTTOM,
            ToastAndroid.SHORT,
          );
          return;
        }

        Alert.alert('Payment Has Been Created! Please Visit Dashboard');
        ToastAndroid.show(
          'Redirecting!',
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
        ToastAndroid.show(
          'Error creating payment! Enter Valid Details',
          ToastAndroid.BOTTOM,
          ToastAndroid.SHORT,
        );
        console.log('Error creating payment method:', error);
      }
    };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={styles.head}>
          <Text style={styles.text_main}>CHECKOUT DETAILS</Text>
          <View style={styles.payment_text_view}>
            <Text style={[styles.payment_text, {fontSize: 16, marginTop: 16}]}>
              PAYMENT DUE:
            </Text>
            <View>
              <Text
                style={[
                  styles.payment_text,
                  {
                    fontWeight: 800,
                    fontSize: 22,
                    marginTop: 4,
                    color: 'black',
                  },
                ]}>
                ${price}
              </Text>
              <Text style={[styles.payment_text, {fontSize: 12}]}>
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

        <View style={styles.form}>
          <View style={{padding: 10}}>
            <Text style={styles.label}>Card number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Card number"
              value={cardNo}
              onChangeText={text => {
                setCardNo(text);
              }}></TextInput>
            <Image
              source={require('./../assets/visa.png')}
              style={{
                height: 40,
                width: 40,
                position: 'absolute',
                top: '52%',
                right: '12%',
              }}
            />
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.label}>Card Holder Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              value={cardHolder}
              onChangeText={text => {
                setCardHolder(text);
              }}></TextInput>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{padding: 10, width: '50%'}}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput
                style={styles.input}
                placeholder="11 / 2023"
                value={expiry}
                onChangeText={text => {
                  setExpiry(text);
                }}></TextInput>
            </View>
            <View style={{padding: 10, width: '50%'}}>
              <Text style={styles.label}>CVV</Text>
              <TextInput
                style={styles.input}
                placeholder="XXX"
                value={cvv}
                onChangeText={text => {
                  setCvv(text);
                }}></TextInput>
            </View>
          </View>
          <View style={styles.button_view}>
            <TouchableOpacity style={styles.button}
            onPress={() => {
              handlePayment()
            }}
            >
              <Icon
                name="lock-closed"
                size={22}
                color="white"
                style={{marginRight: 10}}
              />
              <Text style={styles.btn_text}>PAY FOR BOOKING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = new StyleSheet.create({
  text_main: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    fontWeight: 500,
    padding: 10,
    color: 'black',
    alignSelf: 'center',
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
    color: '#929DA9',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    backgroundColor: '#0D986A',
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: '53%',
    borderRadius: 10,
    position: 'relative',
    top: -8,
  },
  btn_text: {
    marginTop: 2,
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
    marginBottom: 12,
  },
});
export default Checkout;
