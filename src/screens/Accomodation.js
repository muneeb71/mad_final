import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ToastAndroid,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import fs from 'react-native-fs';
import jsonData from './../components/data.json';

const Recommendations = ({navigation, route}) => {
  const hotelData = route.params?.data;
  const place = route.params?.place;
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState([]);

  const hotelDetails = (hotel) => {
    if(hotel.hac_offers.offers){
      navigation.navigate('Single Hotel', {hotel: hotel, place: place})
    }
    else{
      ToastAndroid.show(
        'No Offers Available For This Hotel!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      )
      return;
    }
  }

  const handleClick = num => {
    if (num === 1) {
      setBtn1(!btn1);
    } else if (num === 2) {
      setBtn2(!btn2);
    } else if (num === 3) {
      setBtn3(!btn3);
    } else if (num === 4) {
      setBtn4(!btn4);
    }
  };
  const readFile = async () => {
    try {
      setIsLoading(false);
      return jsonData.data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      ToastAndroid.show(
        'Error Fetching Data',
        ToastAndroid.BOTTOM,
        ToastAndroid.SHORT,
      );
      navigation.navigate('Home');
    }
  };
  useEffect(() => {
    if (hotelData == undefined) {
      setHotels(hotelData);
      setIsLoading(false)
    } else {
      var jsonString = JSON.stringify(jsonData)
      var obj = JSON.parse(jsonString)
      setHotels(obj.data);
      setIsLoading(false)
    }
  }, []);
  return (
    
    <>
      {isLoading ? (
        <>
        <View style={{justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#0D986A" />
        </View>
        </>
      ) : (

        <ScrollView>
           <Text style={styles.text_main}>Accomodations</Text>
          <View style={styles.button_bar}>
            <Pressable
              style={[
                styles.flt_btn,
                {backgroundColor: btn1 ? '#0D986A' : '#F4F4F4'},
              ]}
              onPress={() => {
                handleClick(1);
              }}>
              <Text style={styles.btn_text}>All</Text>
            </Pressable>
            <Pressable
              style={[
                styles.flt_btn,
                {backgroundColor: btn2 ? '#0D986A' : '#F4F4F4'},
              ]}
              onPress={() => {
                handleClick(2);
              }}>
              <Text style={styles.btn_text}>Europe</Text>
            </Pressable>
            <Pressable
              style={[
                styles.flt_btn,
                {backgroundColor: btn3 ? '#0D986A' : '#F4F4F4'},
              ]}
              onPress={() => {
                handleClick(3);
              }}>
              <Text style={styles.btn_text}>Asia</Text>
            </Pressable>

            <Pressable
              style={[
                styles.flt_btn,
                {backgroundColor: btn4 ? '#0D986A' : '#F4F4F4'},
              ]}
              onPress={() => {
                handleClick(4);
              }}>
              <Text style={styles.btn_text}>America</Text>
            </Pressable>
          </View>
          <View style={styles.popularity}>
            <Text style={styles.sort}>Popularity</Text>
            <Icon
              name="arrow-down"
              size={24}
              color="gray"
              style={{marginTop: 5}}
            />
          </View>
          <View>
            <View style={styles.action}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: 600,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Free Accomodation
                </Text>
                <View
                  style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#808080',
                      fontWeight: 500,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    When Booking
                  </Text>
                  <Text
                    style={{
                      backgroundColor: '#FFBB56',
                      borderRadius: 4,
                      paddingVertical: 2,
                      paddingHorizontal: 8,
                      color: '#FFFFFF',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    above $12,000
                  </Text>
                </View>
              </View>
              <Image
                source={require('./../assets/Saly-3.png')}
                style={{position: 'relative', top: -70}}
              />
            </View>
              {
                hotels.map((hotel, index) => (
                  
                  <View style={styles.card_main} key={index}>
                  <View style={styles.image_view}>
                    <Image
                      style={styles.card_image}
                      source={{uri: hotel.photo?.images?.medium?.url}}
                    />
                    <View style={styles.favor}>
                      <Icon name="heart" size={20} color="red" />
                    </View>
                  </View>
                  <View style={styles.card_text_view}>   
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Text style={styles.card_text}>{hotel.name}</Text>
                      <Text style={{marginTop: 3, color: '#ffa700'}}>({hotel.rating})</Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        marginTop: 2,
                        fontFamily: 'Poppins-Regular',
                        fontWeight: 300,
                      }}>
                      Starting From {hotel.price}
                    </Text>
                   <TouchableOpacity style={{flexDirection: 'row'}}
                   onPress={() => {hotelDetails(hotel)}}
                   >
                   
                   <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        fontWeight: 600,
                        fontFamily: 'Poppins-Regular',
                        marginTop: 8,
                      }}>
                      More Info
                    </Text>
                    <Image source={require('./../assets/right-arrow-black.png')} style={{height: 26, width: 26, marginLeft: 6, marginTop: 5}} />
                   </TouchableOpacity>
                  </View>
                </View>
                ))
              }
          </View>
        </ScrollView>
      )}
    </>
    //    <View style={{backgroundColor: 'white', flex: 1}}>
    //    <Text style={styles.text_main}>Accomodations</Text>
    //    {isLoading ? (
    //      <View style={{justifyContent: 'center', flex: 1}}>
    //        <ActivityIndicator size="large" color="#0D986A" />
    //      </View>
    //    ) : (
    //      <ScrollView>
    //        <View style={styles.button_bar}>
    //          <Pressable
    //            style={[
    //              styles.flt_btn,
    //              {backgroundColor: btn1 ? '#0D986A' : '#F4F4F4'},
    //            ]}
    //            onPress={() => {
    //              handleClick(1);
    //            }}>
    //            <Text style={styles.btn_text}>All</Text>
    //          </Pressable>
    //          <Pressable
    //            style={[
    //              styles.flt_btn,
    //              {backgroundColor: btn2 ? '#0D986A' : '#F4F4F4'},
    //            ]}
    //            onPress={() => {
    //              handleClick(2);
    //            }}>
    //            <Text style={styles.btn_text}>Europe</Text>
    //          </Pressable>
    //          <Pressable
    //            style={[
    //              styles.flt_btn,
    //              {backgroundColor: btn3 ? '#0D986A' : '#F4F4F4'},
    //            ]}
    //            onPress={() => {
    //              handleClick(3);
    //            }}>
    //            <Text style={styles.btn_text}>Asia</Text>
    //          </Pressable>

    //          <Pressable
    //            style={[
    //              styles.flt_btn,
    //              {backgroundColor: btn4 ? '#0D986A' : '#F4F4F4'},
    //            ]}
    //            onPress={() => {
    //              handleClick(4);
    //            }}>
    //            <Text style={styles.btn_text}>America</Text>
    //          </Pressable>
    //        </View>
    //        <View style={styles.popularity}>
    //          <Text style={styles.sort}>Popularity</Text>
    //          <Icon
    //            name="arrow-down"
    //            size={24}
    //            color="gray"
    //            style={{marginTop: 5}}
    //          />
    //        </View>
    //        <View>
    //          <View style={styles.action}>
    //            <View>
    //              <Text
    //                style={{
    //                  fontSize: 14,
    //                  color: 'black',
    //                  fontWeight: 600,
    //                  fontFamily: 'Poppins-Regular',
    //                }}>
    //                Free Accomodation
    //              </Text>
    //              <View
    //                style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
    //                <Text
    //                  style={{
    //                    fontSize: 12,
    //                    color: '#808080',
    //                    fontWeight: 500,
    //                    fontFamily: 'Poppins-Regular',
    //                  }}>
    //                  When Booking
    //                </Text>
    //                <Text
    //                  style={{
    //                    backgroundColor: '#FFBB56',
    //                    borderRadius: 4,
    //                    paddingVertical: 2,
    //                    paddingHorizontal: 8,
    //                    color: '#FFFFFF',
    //                    fontFamily: 'Poppins-Regular',
    //                  }}>
    //                  above $12,000
    //                </Text>
    //              </View>
    //            </View>
    //            <Image
    //              source={require('./../assets/Saly-3.png')}
    //              style={{position: 'relative', top: -70}}
    //            />
    //          </View>

    //          <View style={styles.card_main}>
    //            <View style={styles.image_view}>
    //              <Image
    //                style={styles.card_image}
    //                source={require('./../assets/spain.jpeg')}
    //              />
    //              <View style={styles.favor}>
    //                <Icon name="heart" size={20} color="red" />
    //              </View>
    //            </View>
    //            <View style={styles.card_text_view}>
    //              <View style={{flexDirection: 'row', gap: 10}}>
    //                <Text style={styles.card_text}>Spain</Text>
    //                <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
    //              </View>
    //              <Text
    //                style={{
    //                  fontSize: 14,
    //                  color: 'black',
    //                  marginTop: 2,
    //                  fontFamily: 'Poppins-Regular',
    //                  fontWeight: 300,
    //                }}>
    //                Starting From $585
    //              </Text>
    //              <Text
    //                style={{
    //                  fontSize: 14,
    //                  color: 'black',
    //                  fontWeight: 600,
    //                  fontFamily: 'Poppins-Regular',
    //                  marginTop: 8,
    //                }}>
    //                More Info
    //              </Text>
    //            </View>
    //          </View>

    //        </View>
    //      </ScrollView>
    //    )}
    //  </View>
  );
};

const styles = new StyleSheet.create({
  text_main: {
    fontFamily: 'Poppins-Regular',
    fontSize: 26,
    color: 'black',
    fontWeight: 600,
    alignSelf: 'center',
    marginTop: 8,
  },
  button_bar: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
    justifyContent: 'center',
  },
  flt_btn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
  },
  flt_btn_active: {
    backgroundColor: '#0D986A',
  },
  btn_text: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  sort: {
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
    marginTop: 8,
  },
  popularity: {
    flexDirection: 'row',
    gap: 6,
  },
  card_main: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  image_view: {
    padding: 10,
    marginLeft: 6,
    backgroundColor: '#f7dada',
    position: 'absolute',
    top: 30,
    height: 80,
    borderRadius: 10,
  },
  card_image: {
    width: 115,
    height: 110,
    borderRadius: 8,
    position: 'relative',
    top: -30,
  },
  card_text_view: {
    padding: 10,
    position: 'relative',
    left: 155,
    marginTop: 26,
    width: '50%'
  },
  card_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'black',
    fontWeight: 600,
  },
  favor: {
    position: 'absolute',
    top: 55,
    left: 92,
    backgroundColor: 'white',
    padding: 3,
    height: 26,
    width: 26,
    borderRadius: 6,
  },
  action: {
    backgroundColor: '#f7dada',
    height: 100,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
  },
});
export default Recommendations;
