import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
  ToastAndroid,
  ScrollView
} from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Recommendations = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const {category, continent, range, features} = route.params;
  var apiKey = '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';
  const getPlaces = async () => {
    setIsLoading(true);
    const prompt = `write me 5 destinations of ${category} category in ${continent} having a total expenditure of below ${range} with the following features ${features} and return the places as JSON without assignment to variable with keys thumbnailURL, placeName, lowestBudget seperated with comma so i can set it in the array with a spread operator with a authentic thumbnail URL, place name, lowest budget with proper strings (no forward or backward slash except picture url)`;
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 4000,
          n: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );
      var result = response.data.choices[0].text;
      setData([
        ...data,
        {
          thumbnailURL:
            'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2018/03/shutterstock_743012462.jpg',
          placeName: 'Namib Desert, Namibia',
          lowestBudget: '4000',
        },
        {
          thumbnailURL:
            'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2018/03/shutterstock_743012462.jpg',
          placeName: 'Kruger National Park, South Africa',
          lowestBudget: '5000',
        },
        {
          thumbnailURL:
            'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2018/03/shutterstock_743012462.jpg',
          placeName: 'Maasai Mara National Reserve, Kenya',
          lowestBudget: '6000',
        },
        {
          thumbnailURL:
            'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2018/03/shutterstock_743012462.jpg',
          placeName: 'Serengeti National Park, Tanzania',
          lowestBudget: '7000',
        },
        {
          thumbnailURL:
            'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2018/03/shutterstock_743012462.jpg',
          placeName: 'Okavango Delta, Botswana',
          lowestBudget: '9000',
        },
      ]);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      ToastAndroid.show(
        'Something went wrong! Please Try again Later',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      navigation.navigate('Destination');
    }
  };

  useEffect(() => {
    getPlaces();
  }, []);
  const handleClick = event => {
    console.log(event);
  };
  return (
    <>
      {isLoading ? (
        <View style={{justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#0D986A" />
        </View>
      ) : (
        <View style={{backgroundColor: 'white', flex: 1}}>
          <Text style={styles.text_main}>Recommendations </Text>
          <View style={styles.button_bar}>
            <Pressable
              style={[styles.flt_btn]}
              onPress={() => {
                handleClick(1);
              }}>
              <Text style={styles.btn_text}>All</Text>
            </Pressable>
            <Pressable
              style={[styles.flt_btn]}
              onPress={() => {
                handleClick(2);
              }}>
              <Text style={styles.btn_text}>Europe</Text>
            </Pressable>
            <Pressable
              style={[styles.flt_btn]}
              onPress={() => {
                handleClick(3);
              }}>
              <Text style={styles.btn_text}>Asia</Text>
            </Pressable>

            <Pressable
              style={[styles.flt_btn]}
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
         <ScrollView>
         <View>
            {data.length != 0 &&
              data.map((place, index) => (
                <View style={styles.card_main} key={index}>
                  <View style={styles.image_view}>
                    <Image
                      style={styles.card_image}
                      source={
                        index % 2 === 1
                          ? require('./../assets/destination-image.jpeg')
                          : require('./../assets/spain.jpeg')
                      }
                    />
                    <View style={styles.favor}>
                      <Icon name="heart" size={20} color="red" />
                    </View>
                  </View>
                  <View style={styles.card_text_view}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      <Text style={styles.card_text}>{place.placeName}</Text>
                      <Text style={{marginTop: 3, color: '#ffa700'}}>
                        (5.0)
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        marginTop: 2,
                        fontFamily: 'Poppins-Regular',
                        fontWeight: 300,
                      }}>
                      {'Starting From $' +  Number(place.lowestBudget, 2).toLocaleString('en-us')}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        fontWeight: 600,
                        fontFamily: 'Poppins-Regular',
                        marginTop: 8,
                      }}>
                      More Info (Search)
                    </Text>
                  </View>
                </View>
              ))}
          </View>
         </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 6,
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
    marginBottom: 8,
  },
});
export default Recommendations;
