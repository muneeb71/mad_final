import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const SingleHotel = ({navigation, route}) => {
  const { hotel, place } = route.params;
  const [details, setDetails] = useState(null);
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    setHotelData(hotel);
    getDetails()
  }, [hotel]);

  const getDetails = async() => {
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details', 
      params: {
        location_id: 6350989,
        lang: 'en_US',
        currency: 'USD',
      },
      headers: {
        'X-RapidAPI-Key': '467cd9212cmshaf3f763607a7447p17ac21jsnd93ca1989979',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    }; 
    
    try {
      const response = await axios.request(options);
      setDetails(response.data.data[0]);
      return;
    } catch (error) {
      ToastAndroid.show(
        'Something Went Wrong!',
        ToastAndroid.BOTTOM,
        ToastAndroid.SHORT
      )
      navigation.goBack();
    }

  }
  return (
    <View style={[styles.main_parent]}>
     
        <View style={styles.main_bg_view}>
          <ImageBackground
            source={{uri: hotel.photo?.images?.original?.url}}
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

        <View style={[styles.description]}>
        <ScrollView>
        <View style={[styles.desc_heading]}>
            <View>
              <Text style={styles.desc_text}>{hotel.name}</Text>
              <View style={styles.rating}>
                <Icon
                  name="star"
                  size={15}
                  color="#fff"
                  style={{marginTop: 4.5}}
                />
                <Text style={[styles.text, {marginTop: 1}]}>{hotel.rating}</Text>
              </View>
            </View>
            <Text style={[styles.about, {textAlign: 'left', marginTop: 5}]}>
            Our hotel takes an active role in the green campaign by implementing eco-friendly practices and supporting sustainable initiatives for a better future
            Our hotel takes an active role in the green campaign by implementing eco-friendly practices and supporting sustainable initiatives for a better future
            </Text>
          </View>
          <View style={[styles.details]}>
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
            <Pressable style={styles.button} 
            onPress={
              () => {
                navigation.navigate('Flights', {hotel: hotel, place: place})
              }
            }
            >
              <View style={{flexDirection: 'row', gap: 10}}>
                <Icon name="credit-card" size={22} color="#fff"></Icon>
                <Text style={styles.btn_text}>Book Flights</Text>
              </View>
              <Text style={styles.btn_text}>{hotel.price}</Text>
            </Pressable>
          </View>
        </ScrollView>
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
    bottom: 1,
    height: '50%'
  },
  desc_heading: {
    paddingHorizontal: 25,
    paddingVertical: 18
  },
  desc_text: {
    fontFamily: 'poppins',
    fontSize: 24,
    fontWeight: 700,
    color: '#263238',
    width: '70%'
  },
  about: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#6A6A6A',
    paddingHorizontal: 2,
    lineHeight: 25,
    textAlign: 'left',
    fontWeight: 400,
    marginTop: 4
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
    marginTop: 4,
    
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
