import React, { Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Card({children}) {
  return (
    <View style = {styles.card}>
      {children}
      {/* <Text style={styles.cardText}>{title}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
   paddingVertical: 20,
   paddingHorizontal: 10,
   borderRadius: 8,
   marginTop:20,
   backgroundColor: "#F7A4A4",
   fontSize: 16,
   fontFamily:"TiltNeon",
   lineHeight:20
  //  elevation: 3,
  //  backgroundColor:"#fff",
  //  shadowOffset: { width: 1, height: 1 },
  //  shadowColor: '#333',
  //  shadowOpacity: 0.3,
  //  shadowRadius: 2,
  //  marginHorizontal: 4,
  //  marginVertical: 6,

  }
})

export default Card;