import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const Flights = () => {
  const [toggleRound, setToggleRound] = useState(false);
  const [toggleOneWay, setToggleOneWay] = useState(false);
  const [toggleMulti, setToggleMulti] = useState(false);
  return (
    <View style={styles.parent_view}>
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
          style={[styles.flt_btn, {backgroundColor: '#0D986A'}]}
          onPress={() => {
            handleClick(this);
          }}>
          <Text style={[styles.btn_text, {color: 'white'}]}>Lowest Price</Text>
        </Pressable>
        <Pressable
          style={[styles.flt_btn]}
          onPress={() => {
            handleClick(this);
          }}>
          <Text style={styles.btn_text}>Shortest</Text>
        </Pressable>
        <Pressable
          style={[styles.flt_btn]}
          onPress={() => {
            handleClick(this);
          }}>
          <Text style={styles.btn_text}>Min Stops</Text>
        </Pressable>
      </View>
     <View >
     <View style={[styles.flight_details]}>
        <View style={styles.flight_details_row}>
          <Text style={styles.data_heading}>FLY EMIRATES</Text>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  21:30
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  ISB
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
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  21:30
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  ISB
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 8,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  2hr 0mins
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  Non Stop
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  21:30
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  ISB
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
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  21:30
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  ISB
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 8,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  2hr 0mins
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  Non Stop
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.flight_details}>
        <View style={styles.flight_details_row}>
          <Text style={styles.data_heading}>FLY EMIRATES</Text>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  21:30
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  ISB
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
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  21:30
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  ISB
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 8,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  2hr 0mins
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  Non Stop
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  21:30
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  ISB
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
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  21:30
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  ISB
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 8,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  2hr 0mins
                </Text>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 10}}>
                  Non Stop
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
     </View>
      
    </View>
  );
};

const styles = new StyleSheet.create({
  parent_view: {
    flex: 1,
    backgroundColor: 'white',
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
    height: "90%",
    borderBottomWidth: 2,
    borderBottomColor: '#25D482'
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
    height: '30%'
  }
});

export default Flights;
