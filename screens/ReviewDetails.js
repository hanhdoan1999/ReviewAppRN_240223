import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card/Card';
import {globalStyles, images} from '../styles/global';

function ReviewDetails({navigation, route}) {
  //  const handlePress = () =>{
  //   navigation.goBack();
  //  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>ReviewDetails</Text>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        {/* <Text>{route.params.rating}</Text> */}
        <View style={styles.rating}>
           <Image source = {images.ratings[route.params.rating]}/>
        </View>
      </Card>
      {/* <Button title={"GO TO HOME"} onPress={handlePress}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
   marginTop: 10,
   paddingVertical:5,
   alignItems: "center",
   borderTopWidth: 1,
   borderStyle:"dashed"
  }
})

export default ReviewDetails;
