import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const SingleFlight = () => {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1, marginBottom: 25}}>
      <View style={styles.head}>
        <View style={styles.left}>
          <Text style={styles.sub}>Europe</Text>
          <Text style={styles.main_head} numberOfLines={2}>
            Fly Emirates
          </Text>
        </View>
        <View style={{padding: 10, marginLeft: 15}}>
          <Text style={styles.price_text}>Price</Text>
          <Text style={styles.price_details}>$285</Text>
        </View>
        <View style={{padding: 10, marginLeft: 15}}>
          <Text style={styles.price_text}>Capacity</Text>
          <Text style={styles.price_details}>182 Passengers</Text>
        </View>
        <View style={styles.bg_plane}>
          <Image source={require('./../assets/singleflight.png')} />
        </View>
        <View style={styles.rating}>
          <Icon name="star" size={18} color="#fff" style={{marginTop: 3}} />
          <Text style={[styles.text, {marginTop: 1}]}>4.8</Text>
        </View>
      </View>
      <View>
        <Text style={styles.overview}>Overview</Text>
        <View style={styles.icons_line}>
          <View>
            <Image
              source={require('./../assets/flight-1.png')}
              style={styles.icons}
            />
            <Text style={styles.icon_text}>CARBON EMISSION</Text>
            <Text style={styles.icon_subText}>35%-40%</Text>
          </View>
          <View>
            <Image
              source={require('./../assets/flight-2.png')}
              style={styles.icons}
            />
            <Text style={styles.icon_text}>ECO RATING</Text>
            <Text style={styles.icon_subText}>82%</Text>
          </View>
          <View>
            <Image
              source={require('./../assets/flight-3.png')}
              style={styles.icons}
            />
            <Text style={styles.icon_text}>TECHNOLOGY</Text>
            <Text style={styles.icon_subText}>NEW</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={[styles.overview, {paddingBottom: 7}]}>About</Text>
        <View style={styles.icons_line}>
          <Text style={styles.about}>
            This airplane is designed with eco-friendly technology to minimize
            carbon emissions, making it an ideal choice for responsible and
            sustainable air travel.This airplane is designed with eco-friendly
            technology to minimize carbon emissions, making it an ideal choice
            for responsible and sustainable air travel.
          </Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.button}>
         <View style={{flexDirection: 'row', gap: 10}}>
           <Icon name="credit-card" size={22} color="#fff"></Icon>
          <Text style={styles.btn_text}>Book Now</Text>
         </View>
          <Text style={styles.btn_text}>$285</Text>
        </Pressable>
      </View>
    </ScrollView>
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
    backgroundColor: '#DEEAD8',
    height: '46%',
    borderBottomLeftRadius: 40,
  },
  left: {
    padding: 20,
  },
  sub: {
    fontSize: 16,
    color: '#435B71',
    fontWeight: 700,
    fontFamily: 'Poppins-Regular',
  },
  main_head: {
    width: '50%',
    color: '#002140',
    fontSize: 38,
    fontWeight: 500,
    fontFamily: 'Poppins-Regular',
  },
  price_text: {
    fontSize: 17,
    color: '#435B71',
    fontFamily: 'Poppins-Regular',
  },
  price_details: {
    fontSize: 17,
    color: '#435B71',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  rating: {
    height: 25,
    backgroundColor: '#0D986A',
    width: 60,
    position: 'absolute',
    top: '90%',
    right: 12,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontFamily: 'Poppins-Regular',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  bg_plane: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  overview: {
    padding: 18,
    fontWeight: 500,
    fontSize: 16,
    color: '#002140',
    fontFamily: 'Poppins-Regular',
  },
  icons_line: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icons: {
    height: 58,
    width: 70,
  },
  icon_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 8.2,
    fontWeight: 600,
    color: '#435B71',
    marginTop: 6,
    textAlign: 'center',
  },
  icon_subText: {
    color: '#0D986A',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: 800,
    textAlign: 'center',
  },
  about: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#002410',
    paddingHorizontal: 24,
    lineHeight: 25,
    textAlign: 'left',
    fontWeight: 400,
  },
  button: {
    backgroundColor: '#0D986A',
    paddingVertical: 12,
    paddingHorizontal: 14,
    width: '85%',
    alignSelf: 'center',
    marginTop: 8,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn_text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    fontWeight: 700,
  },
});

export default SingleFlight;
