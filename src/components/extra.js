// import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
// import React, {useState} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {style} from '@mui/system';
// import {white} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
// import LinearGradient from 'react-native-linear-gradient';

// const Recommendations = ({navigate}) => {
//   //   const [btnPressed, setBtnPressed] = useState(Array(6).fill(false));
//   //   const handleButtonPress = (index) => {
//   //     const updatedButtonPressed = [...btnPressed];
//   //     updatedButtonPressed[index] = !updatedButtonPressed[index];
//   //     setBtnPressed(updatedButtonPressed);
//   //   }

//   const handleClick = event => {
//     console.log(event);
//   };
//   return (
//     <View style={{backgroundColor: 'white', flex: 1}}>
//       <Text style={styles.text_main}>Recommendations</Text>
//       <View style={styles.button_bar}>
//         <Pressable
//           style={[styles.flt_btn]}
//           onPress={() => {
//             handleClick(this);
//           }}>
//           <Text style={styles.btn_text}>All</Text>
//         </Pressable>
//         <Pressable
//           style={[styles.flt_btn]}
//           onPress={() => {
//             handleClick(this);
//           }}>
//           <Text style={styles.btn_text}>Europe</Text>
//         </Pressable>
//         <Pressable
//           style={[styles.flt_btn]}
//           onPress={() => {
//             handleClick(this);
//           }}>
//           <Text style={styles.btn_text}>Asia</Text>
//         </Pressable>
//         <Pressable
//           style={[styles.flt_btn]}
//           onPress={() => {
//             handleClick(this);
//           }}>
//           <Text style={styles.btn_text}>Africa</Text>
//         </Pressable>
//         <Pressable
//           style={[styles.flt_btn]}
//           onPress={() => {
//             handleClick(this);
//           }}>
//           <Text style={styles.btn_text}>America</Text>
//         </Pressable>
//       </View>
//       <View style={styles.popularity}>
//         <Text style={styles.sort}>Populartiy</Text>
//         <Icon name="check" size={24} color="black" />
//       </View>
//       <View>
//         <View style={styles.card_main}>
//           <View style={styles.image_view}>
//             <Image
//               style={styles.card_image}
//               source={require('./../assets/spain.jpeg')}
//             />
//             <View style={styles.favor}>
//               <Icon name="plus" size={24} color="white" />
//             </View>
//           </View>
//           <View style={styles.card_text_view}>
//             <View style={{flexDirection: 'row', gap: 10}}>
//               <Text style={styles.card_text}>Spain</Text>
//               <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
//             </View>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: 'black',
//                 marginTop: 2,
//                 fontWeight: 200,
//               }}>
//               Starting From $585
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: 'black',
//                 fontWeight: 600,
//                 marginTop: 8,
//               }}>
//               More Info
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card_main}>
//           <View style={styles.image_view}>
//             <Image
//               style={styles.card_image}
//               source={require('./../assets/spain.jpeg')}
//             />
//             <View style={styles.favor}>
//               <Icon name="plus" size={24} color="white" />
//             </View>
//           </View>
//           <View style={styles.card_text_view}>
//             <View style={{flexDirection: 'row', gap: 10}}>
//               <Text style={styles.card_text}>Spain</Text>
//               <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
//             </View>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: 'black',
//                 marginTop: 2,
//                 fontWeight: 200,
//               }}>
//               Starting From $585
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: 'black',
//                 fontWeight: 600,
//                 marginTop: 8,
//               }}>
//               More Info
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card_main}>
//           <View style={styles.image_view}>
//             <Image
//               style={styles.card_image}
//               source={require('./../assets/spain.jpeg')}
//             />
//             <View style={styles.favor}>
//               <Icon name="plus" size={24} color="white" />
//             </View>
//           </View>
//           <View style={styles.card_text_view}>
//             <View style={{flexDirection: 'row', gap: 10}}>
//               <Text style={styles.card_text}>Spain</Text>
//               <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
//             </View>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: 'black',
//                 marginTop: 2,
//                 fontWeight: 200,
//               }}>
//               Starting From $585
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: 'black',
//                 fontWeight: 600,
//                 marginTop: 8,
//               }}>
//               More Info
//             </Text>
//           </View>
//         </View>

//         <View style={styles.action}>
//           <Text style={{fontSize: 18, color: 'black', fontWeight: 600}}>
//             Free Accomodation
//           </Text>
//           <View style={{flexDirection: 'row', gap: 6, marginTop: 2}}>
//             <Text style={{fontSize: 14, color: 'gray', fontWeight: 500}}>
//               When Booking
//             </Text>
//             <Text
//               style={{
//                 backgroundColor: '#ffa700',
//                 borderRadius: 4,
//                 paddingLeft: 8,
//                 paddingRight: 8,
//                 color: 'white',
//                 paddingBottom: 2,
//               }}>
//               above $12000
//             </Text>
//           </View>
//         </View>
//         <View style={styles.card_main}>
//           <View style={styles.image_view}>
//             <Image
//               style={styles.card_image}
//               source={require('./../assets/spain.jpeg')}
//             />
//             <View style={styles.favor}>
//               <Icon name="plus" size={24} color="white" />
//             </View>
//           </View>
//           <View style={styles.card_text_view}>
//             <View style={{flexDirection: 'row', gap: 10}}>
//               <Text style={styles.card_text}>Spain</Text>
//               <Text style={{marginTop: 3, color: '#ffa700'}}>(5.0)</Text>
//             </View>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: 'black',
//                 marginTop: 2,
//                 fontWeight: 200,
//               }}>
//               Starting From $585
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: 'black',
//                 fontWeight: 600,
//                 marginTop: 8,
//               }}>
//               More Info
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = new StyleSheet.create({
//   text_main: {
//     fontFamily: 'poppins',
//     fontSize: 26,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   button_bar: {
//     width: '100%',
//     flexDirection: 'row',
//     gap: 10,
//     marginTop: 20,
//     marginLeft: 10,
//   },
//   flt_btn: {
//     padding: 6,
//     backgroundColor: '#cfd0d1',
//     width: 68,
//     borderRadius: 8,
//   },
//   flt_btn_active: {
//     backgroundColor: '#0D986A',
//   },
//   btn_text: {
//     textAlign: 'center',
//     color: 'black',
//   },
//   sort: {
//     marginLeft: 10,
//     marginTop: 8,
//   },
//   popularity: {
//     flexDirection: 'row',
//     gap: 6,
//   },
//   card_main: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//     marginBottom: 10,
//   },
//   image_view: {
//     padding: 10,
//     marginLeft: 6,
//     backgroundColor: '#f7dada',
//     position: 'absolute',
//     top: 30,
//     height: 80,
//     borderRadius: 10,
//   },
//   card_image: {
//     width: 115,
//     height: 110,
//     borderRadius: 8,
//     position: 'relative',
//     top: -30,
//   },
//   card_text_view: {
//     padding: 10,
//     position: 'relative',
//     left: 155,
//     marginTop: 26,
//   },
//   card_text: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   favor: {
//     position: 'absolute',
//     top: 55,
//     left: 92,
//     backgroundColor: 'white',
//     padding: 3,
//     height: 30,
//     width: 25,
//     borderRadius: 6,
//   },
//   action: {
//     backgroundColor: '#f7dada',
//     height: 100,
//     width: '90%',
//     alignSelf: 'center',
//     borderRadius: 16,
//     padding: 20,
//   },
// });
// export default Recommendations;