import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TextInput,
  Pressable,
  ScrollView,
  CheckBox,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
// import { TextInput } from 'react-native-paper';

const Destination = ({navigation, route}) => {
  const [category, setCategory] = useState('');
  const [continent, setContinent] = useState('');
  const [range, setRange] = useState(0);
  const [features, setFeatures] = useState('');

  const getPlaces = async () => {
    navigation.navigate("Recommendations");
    // const API_KEY = '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';
    // try {
    //   console.log(
    //     `Write me destinations of ${category} category in  ${continent} having a total expenditure of below ${range} with the following features ${features}`,
    //   );

    //   const response = await axios.post(
    //     'https://api.openai.com/v1/completions',
    //     {
    //       prompt: `Write me destinations of ${category} category in  ${continent} having a total expenditure of below ${range} with the following features ${features}`,
    //       model: 'text-davinci-003',
    //       max_tokens: 10,
    //       n: 1,
    //     },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${API_KEY}`,
    //       },
    //     },
    //   );
    //   console.log('here +=+++');
    //   console.log(response.data.choices[0].text);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.main_parent}>
        <View style={styles.image}>
          <Image
            style={styles.bg_image}
            source={require('./../assets/destination-image.jpeg')}
          />
        </View>
        <View style={styles.text_view}>
          <Text style={styles.text_main}>Dream Destinations</Text>
        </View>
        <View style={styles.form}>
          <View style={{padding: 10}}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Category"
              onChangeText={text => {
                setCategory(text);
              }}></TextInput>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.label}>Continent</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Continent"
              onChangeText={text => {
                setContinent(text);
              }}></TextInput>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.label}>Range</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Range"
              onChangeText={text => {
                setRange(text);
              }}></TextInput>
          </View>
          <View style={{padding: 10}}>
            <Text style={styles.label}>Features</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Preferences"
              onChangeText={text => {
                setFeatures(text);
              }}></TextInput>
          </View>
          <View style={styles.button_view}>
            <Pressable style={styles.button} onPress={getPlaces}>
              <Text style={styles.btn_text}>GET PLACES</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = new StyleSheet.create({
  main_parent: {
    flex: 1,
  },
  image: {
    height: '36%',
  },
  bg_image: {
    backgroundColor: '#000',
    position: 'relative',
    width: '100%',
    top: -130,
    borderBottomLeftRadius: 52,
    borderBottomRightRadius: 52,
  },
  text_view: {
    alignSelf: 'center',
  },
  text_main: {
    fontFamily: 'poppins',
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  form: {
    padding: 8,
  },
  label: {
    fontSize: 18,
    color: 'black',
    marginBottom: 6,
  },
  input: {
    backgroundColor: 'transparent',
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
  },
  button: {
    backgroundColor: '#0D986A',
  },
  button_view: {
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#0D986A',
    padding: 12,
    width: '90%',
    borderRadius: 10,
  },
  btn_text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Destination;