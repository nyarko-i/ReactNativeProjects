import {
  View,
  StyleSheet,
  Text,
  Alert,
  Button
 
} from "react-native";
import Greet from "./components/Greet";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkmode}>
        <Text style={styles.darkmodeText}>
          Style Inheritance 
        </Text>
      </View>
      <View style={[ styles.box,styles.lightblueBox, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box,styles.lightgreenBox]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "plum",
    padding: 60
  },
  box: {
    width: 250,
    height: 250,
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderBlockColor: "purple",
    borderStyle: "solid",
  },
  lightblueBox: {
    backgroundColor: "lightblue",

  },
  lightgreenBox: {
    backgroundColor: "lightgreen",

  },
  boxShadow: {
    shadowColor: "blue",
    shadowOffset:{
      width: 6,
      height: 6
    },
    shadowOpacity: 4
  },
  darkmode: {
    backgroundColor: "black"
  },
  darkmodeText: {
    color: 'white'
  }
  
})