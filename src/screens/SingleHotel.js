import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SingleHotel = () => {
  return (
    <View style={styles.main_parent}>
      <View style={styles.main_bg_view}>
        <Image
          source={require('./../assets/spain.jpeg')}
          style={styles.main_bg}
        />
      </View>
      <View style={styles.action_icons}>
        <Image
          source={require('./../assets/location.png')}
          style={{height: 65, width: 60}}
        />
        <Image
          source={require('./../assets/hotel.png')}
          style={{height: 50, width: 50, marginTop: 6}}
        />
        <Image
          source={require('./../assets/road-sign.png')}
          style={{height: 60, width: 60}}
        />
        <Image
          source={require('./../assets/dish.png')}
          style={{height: 60, width: 60}}
        />
      </View>
      <View style={styles.description}>
        <View style={styles.desc_heading}>
          <View>
            <Text style={styles.desc_text}>Easy-Inn</Text>
            <View style={styles.rating}>
              <Icon name="star" size={15} color="#fff" style={{marginTop: 4.5}} />
              <Text style={[styles.text, {marginTop: 1}]}>4.8</Text>
            </View>
          </View>
          <Text style={styles.about}>
            This airplane is designed with eco-friendly technology to minimize
            carbon emissions, making it an ideal choice for responsible and
            sustainable air travel.This airplane is designed with eco-friendly
            technology to minimize carbon emissions, making it an ideal choice
            for responsible and sustainable air travel.
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = new StyleSheet.create({
  main_parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  main_bg_view: {
    width: '100%',
    height: '55%',
  },
  main_bg: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  action_icons: {
    position: 'absolute',
    bottom: '52%',
    backgroundColor: '#BBBBBBAB',
    width: '85%',
    paddingHorizontal: 2,
    paddingVertical: 8,
    alignSelf: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  description: {
    backgroundColor: '#fff',
    borderRadius: 20,
    position: 'absolute',
    bottom: 150,
  },
  desc_heading: {
    padding: 27,
  },
  desc_text: {
    fontFamily: 'poppins',
    fontSize: 24,
    fontWeight: 700,
    color: '#263238',
  },
  about: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#6A6A6A',
    paddingHorizontal: 2,
    lineHeight: 25,
    textAlign: 'left',
    fontWeight: 400,
  },
  rating: {
    
    height: 26,
    backgroundColor: '#0D986A',
    width: 60,
    position: 'absolute',
    top: '15%',
    right: 12,
    borderRadius: 14,
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
});
export default SingleHotel;
