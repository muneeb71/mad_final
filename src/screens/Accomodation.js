import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from '@mui/system';
import {white} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import LinearGradient from 'react-native-linear-gradient';

const Recommendations = ({navigate}) => {
  //   const [btnPressed, setBtnPressed] = useState(Array(6).fill(false));
  //   const handleButtonPress = (index) => {
  //     const updatedButtonPressed = [...btnPressed];
  //     updatedButtonPressed[index] = !updatedButtonPressed[index];
  //     setBtnPressed(updatedButtonPressed);
  //   }

  const handleClick = event => {
    console.log(event);
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text style={styles.text_main}>Accomodations</Text>
      <View style={styles.button_bar}>
        <Pressable
          style={[styles.flt_btn]}
          onPress={() => {
            handleClick(this);
          }}>
          <Text style={styles.btn_text}>All</Text>
        </Pressable>
        <Pressable
          style={[styles.flt_btn]}
          onPress={() => {
            handleClick(this);
          }}>
          <Text style={styles.btn_text}>Europe</Text>
        </Pressable>
        <Pressable
          style={[styles.flt_btn]}
          onPress={() => {
            handleClick(this);
          }}>
          <Text style={styles.btn_text}>Asia</Text>
        </Pressable>

        <Pressable
          style={[styles.flt_btn]}
          onPress={() => {
            handleClick(this);
          }}>
          <Text style={styles.btn_text}>America</Text>
        </Pressable>
      </View>
      <View style={styles.popularity}>
        <Text style={styles.sort}>Popularity</Text>
        <Icon name="arrow-down" size={24} color="gray" style={{marginTop: 5}} />
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
            <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
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
          <Image source={require('./../assets/Saly-3.png')} style={{position: 'relative', top: -70}}/>
        </View>
        <View style={styles.card_main}>
          <View style={styles.image_view}>
            <Image
              style={styles.card_image}
              source={require('./../assets/spain.jpeg')}
            />
            <View style={styles.favor}>
              <Icon name="heart" size={20} color="red" />
            </View>
          </View>
          <View style={styles.card_text_view}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={styles.card_text}>Spain</Text>
              <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              fontFamily: 'Poppins-Regular',  fontWeight: 300,
              }}>
              Starting From $585
            </Text>
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
          </View>
        </View>
        <View style={styles.card_main}>
          <View style={styles.image_view}>
            <Image
              style={styles.card_image}
              source={require('./../assets/spain.jpeg')}
            />
            <View style={styles.favor}>
            <Icon name="heart" size={20} color="red" />
            </View>
          </View>
          <View style={styles.card_text_view}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={styles.card_text}>Spain</Text>
              <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              fontFamily: 'Poppins-Regular',  fontWeight: 200,
              }}>
              Starting From $585
            </Text>
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
          </View>
        </View>
        <View style={styles.card_main}>
          <View style={styles.image_view}>
            <Image
              style={styles.card_image}
              source={require('./../assets/spain.jpeg')}
            />
            <View style={styles.favor}>
            <Icon name="heart" size={20} color="red" />
            </View>
          </View>
          <View style={styles.card_text_view}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={styles.card_text}>Spain</Text>
              <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginTop: 2,
              fontFamily: 'Poppins-Regular',  fontWeight: 200,
              }}>
              Starting From $585
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                fontWeight: 200,
             fontFamily: 'Poppins-Regular',
                marginTop: 8,
              }}>
              More Info
            </Text>
          </View>
        </View>

        <View style={styles.card_main}>
          <View style={styles.image_view}>
            <Image
              style={styles.card_image}
              source={require('./../assets/spain.jpeg')}
            />
            <View style={styles.favor}>
            <Icon name="heart" size={20} color="red" />
            </View>
          </View>
          <View style={styles.card_text_view}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={styles.card_text}>Spain</Text>
              <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginTop: 2,
                fontWeight: 200,
              fontFamily: 'Poppins-Regular',  
              }}>
              Starting From $585
            </Text>
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
          </View>
        </View>
      </View>
    </View>
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
    flexDirection: 'row'
  },
});
export default Recommendations;
