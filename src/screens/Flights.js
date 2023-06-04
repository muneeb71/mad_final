import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar from '../components/NavBar';
import flightsData from './../components/flights.json';

const Flights = ({navigation, route}) => {
  const [toggleRound, setToggleRound] = useState(false);
  const [toggleOneWay, setToggleOneWay] = useState(false);
  const [toggleMulti, setToggleMulti] = useState(false);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [data, setData] = useState([]);
  const hotel = route.params.hotel;
  const handleClick = num => {
    if (num === 1) {
      setBtn1(!btn1);
    } else if (num === 2) {
      setBtn2(!btn2);
    } else if (num === 3) {
      setBtn3(!btn3);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const records = await JSON.parse(JSON.stringify(flightsData));
    setData(records.data);
   
  };
  const TimeConverter = ({timestamp}) => {
    // Create a new Date object using the timestamp
    const date = new Date(timestamp);

    // Get the hours and minutes from the date object
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format the time as a string
    const formattedTime = `${hours}:${minutes}`;

    return (
      <Text style={{textAlign: 'center', color: 'white', fontSize: 10}}>
        {formattedTime}
      </Text>
    );
  };
  return (
    <View style={styles.parent_view}>
      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        <Text style={styles.text_main}>FLIGHTS</Text>
        <View style={styles.trip_types}>
          <View>
            <CheckBox
              checkedColor="#0D986A"
              checked={toggleRound}
              onPress={() => {
                setToggleRound(!toggleRound);
                setToggleOneWay(!true);
                setToggleMulti(!true);
              }}
            />
            <Text style={styles.checkTitle}>ROUND-TRIP</Text>
          </View>
          <View>
            <CheckBox
              checkedColor="#0D986A"
              checked={toggleOneWay}
              onPress={() => {
                setToggleOneWay(!toggleOneWay);
                setToggleRound(!true);
                setToggleMulti(!true);
              }}
            />
            <Text style={styles.checkTitle}>ONE-WAY</Text>
          </View>
          <View>
            <CheckBox
              checkedColor="#0D986A"
              checked={toggleMulti}
              onPress={() => {
                setToggleMulti(!toggleMulti);
                setToggleOneWay(!true);
                setToggleRound(!true);
              }}
            />
            <Text style={styles.checkTitle}>MULTI-CITY</Text>
          </View>
        </View>
        <View>
          <View style={styles.details_row}>
            <Image
              source={require('./../assets/plane.png')}
              style={styles.input_icon}
            />
            <TextInput style={styles.input} placeholder="From"></TextInput>
            <Image
              source={require('./../assets/plane.png')}
              style={[styles.input_icon1, {right: '44%'}]}
            />

            <TextInput style={styles.input} placeholder="To"></TextInput>
          </View>
          <View style={styles.details_row}>
            <Image
              source={require('./../assets/calendar.png')}
              style={[styles.input_icon, {width: 28, height: 26}]}
            />

            <TextInput style={styles.input} placeholder="Departure"></TextInput>
            <Image
              source={require('./../assets/calendar.png')}
              style={[styles.input_icon1]}
            />

            <TextInput style={styles.input} placeholder="Arrival"></TextInput>
          </View>
        </View>
        <View style={styles.button_bar}>
          <Pressable
            style={[
              styles.flt_btn,
              {backgroundColor: btn1 ? '#0D986A' : '#F4F4F4'},
            ]}
            onPress={() => {
              handleClick(1);
            }}>
            <Text style={[styles.btn_text]}>Lowest Price</Text>
          </Pressable>
          <Pressable
            style={[
              styles.flt_btn,
              {backgroundColor: btn2 ? '#0D986A' : '#F4F4F4'},
            ]}
            onPress={() => {
              handleClick(2);
            }}>
            <Text style={styles.btn_text}>Shortest</Text>
          </Pressable>
          <Pressable
            style={[
              styles.flt_btn,
              {backgroundColor: btn3 ? '#0D986A' : '#F4F4F4'},
            ]}
            onPress={() => {
              handleClick(3);
            }}>
            <Text style={styles.btn_text}>Min Stops</Text>
          </Pressable>
        </View>

        {data &&
          data?.map((flight, index) => (
           <TouchableOpacity
           onPress={
           () => {
            navigation.navigate('Single Flight', {data: flight, place: hotel})
           }
           }
           >
             <View style={[styles.flight_details]} key={index}>
              <View style={styles.flight_details_row}>
                <Text style={styles.data_heading}>
                  {flight.legs[0].carriers[0].name}
                </Text>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('./../assets/plane_row.png')}
                        style={{height: 42, width: 32}}
                      />
                      <View
                        style={{
                          flexDirection: 'column',
                          marginLeft: 8,
                          justifyContent: 'center',
                          width: '25%'
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 10,
                          }}>
                          {
                            <TimeConverter
                              timestamp={flight.legs[0].departure}
                            />
                          }
                        </Text>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 10,
                            
                          }}>
                          {flight.legs[0].origin.name}
                        </Text>
                      </View>
                      <Image
                        source={require('./../assets/right-arrow.png')}
                        style={{
                          height: 30,
                          width: 40,
                          alignSelf: 'center',
                          marginLeft: 15,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '25%'
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}>
                        <TimeConverter timestamp={flight.legs[0].arrival} />
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}>
                        {flight.legs[0].destination.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        marginLeft: 8,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}>
                        {flight.legs[0].duration} Mins
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}>
                        Non Stop
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('./../assets/plane_row.png')}
                        style={{height: 42, width: 32}}
                      />
                      <View
                        style={{
                          flexDirection: 'column',
                          marginLeft: 8,
                          justifyContent: 'center',
                          width: '25%',
                          marginTop: 6
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 10,
                          }}>
                          <TimeConverter timestamp={flight.legs[1].departure} />
                        </Text>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 10,
                          }}>
                          {flight.legs[1].origin.name}
                        </Text>
                      </View>
                      <Image
                        source={require('./../assets/right-arrow.png')}
                        style={{
                          height: 30,
                          width: 40,
                          alignSelf: 'center',
                          marginLeft: 15,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        width: '25%',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}>
                        <TimeConverter timestamp={flight.legs[1].arrival} />
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}>
                        {flight.legs[1].destination.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        marginLeft: 8,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}>
                        {flight.legs[1].duration} Mins
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: 10,
                        }}>
                        Non Stop
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
           </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = new StyleSheet.create({
  parent_view: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  trip_types: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  checkTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: 800,
    color: '#0D986A',
    textAlign: 'center',
  },
  details_row: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    width: '50%',
    backgroundColor: '#E8E6E6',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 16,
    borderColor: '#D9D9D9',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
  },
  arrow: {
    height: 36,
    width: 36,
    zIndex: 1000,
    position: 'absolute',
    right: '50%',
    top: '20%',
    backgroundColor: 'white',
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'gray',
  },
  input_icon: {
    height: 28,
    width: 22,
    position: 'absolute',
    zIndex: 10000,
    left: 20,
    top: 15,
  },
  input_icon1: {
    height: 28,
    width: 28,
    position: 'absolute',
    zIndex: 10000,
    right: '45%',
    top: 15,
  },
  button_bar: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  flt_btn: {
    padding: 6,
    backgroundColor: '#F4F4F4',
    width: 98,
    borderRadius: 8,
  },
  flt_btn_active: {
    backgroundColor: '#0D986A',
  },
  btn_text: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: '#505050',
  },
  flight_details_row: {
    width: '95%',
    backgroundColor: '#0D986A',
    alignSelf: 'center',
    paddingHorizontal: 13,
    paddingVertical: 6,
    marginTop: 16,
    borderRadius: 14,
    height: '90%',
    borderBottomWidth: 2,
    borderBottomColor: '#25D482',
  },
  data_heading: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 600,
  },
  flight_details: {
    fontFamily: 'Poppins-Regular',
    height: 150,
  },
  text_main: {
    fontFamily: 'Poppins-Regular',
    fontSize: 26,
    color: 'black',
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default Flights;
