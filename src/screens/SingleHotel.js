import {View, Text, StyleSheet, Image, Pressable, ImageBackground} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const SingleHotel = () => {
  return (
     <View style={[styles.main_parent]}>
   
    <View style={styles.main_bg_view}>
        <ImageBackground
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
        <View style={styles.details}>
       <View>
       <Image
          source={require('./../assets/double-bed.png')}
          style={{height: 60, width: 60, alignSelf: 'center'}}
        />
        <Text style={styles.icon_subText}>2 Bedrooms</Text>
       </View>
       <View>
       <Image
          source={require('./../assets/shower.png')}
          style={{height: 60, width: 60, alignSelf: 'center'}}
        />
         <Text style={styles.icon_subText}>2 Bathrooms</Text>
       </View>
        <View>
        <Image
          source={require('./../assets/tv.png')}
          style={{height: 60, width: 60, alignSelf: 'center'}}
        />
         <Text style={styles.icon_subText}>1 TV Lounge</Text>
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
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 24,
    position: 'absolute',
    bottom: 130,
    height: '34%'
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
    top: '7%',
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
  details: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '20%',
 
  },
  icon_subText: {
    color: '#0D986A',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: 800,
    textAlign: 'left',
    marginTop: 4
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
export default SingleHotel;
