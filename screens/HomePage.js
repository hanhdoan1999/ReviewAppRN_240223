import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Card from '../components/Card/Card';
import {globalStyles} from '../styles/global';
import ReviewForm from './ReviewForm';

function HomePage({navigation}) {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);

  const handlePress = () => {
    navigation.navigate('ReviewDetail');
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModel = () => {
    setModalVisible(true);
  };

  const handleAddReview = (review)=> {
    review.key = Math.random().toString();
    setReviews((pre) => {
      return [ review, ...pre]
    })
    setModalVisible(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalView}>
          <View style={styles.modelTop}>
            <Text style={styles.titleModel}>Add new</Text>
            <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>x</Text>
          </Pressable>
          </View>
          <ReviewForm addReview={handleAddReview}/>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Text style={globalStyles.titleText}>Home</Text>
      <TouchableOpacity style={styles.plusW} onPress={handleOpenModel}>
        <View style={styles.plus}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetail', item)}>
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      {/* <Button title={"GO TO DETAIL"} onPress={handlePress}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // plusW:{
  //   alignItems: "center",
  // },
  plus: {
    borderWidth: 2,
    borderColor: '#ccc',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modelTop:{
    width: "100%",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleModel:{
    fontSize:18,
    textTransform:"uppercase",
    fontWeight: "500",
    fontFamily:"TiltNeon"
  },
  button: {
    width:30,
    height: 30,
    borderRadius: 30,
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    borderColor: "#ccc",
    borderWidth:1
  },
  textStyle: {
    color: "#000",
    // top:2
  }
});

export default HomePage;
