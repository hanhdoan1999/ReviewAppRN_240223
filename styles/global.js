import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container :{
    flex: 1,
    padding: 20
  },
  titleText: {
    fontFamily: "TiltNeon",
    fontSize: 18,
    color: "#333"
  },
  paragraph :{
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    width: "100%",
    paddingVertical:10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius:6,
    borderColor: "#ccc"
  },
  error:{
    color: "red",
    marginTop: 5
    // height: 10
  }
})

export const images ={
  ratings :{
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
} 