import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.indicatorbox}>
        <Text style={styles.countstyle}>{count}</Text>
      </View>
      <View>
        <Text style={styles.desctxt}>Press the below button to increase the count</Text>
      </View>
      <View style={styles.buttonplus}>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={styles.txtbutton}>Button</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.desctxt1}>Press the below button to increase the count</Text>
      </View>
      <View style={styles.buttonplus}>
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text style={styles.txtbutton}>Button</Text>
        </TouchableOpacity>
      </View>
    </View>

    // Explanation
    // I have used useState from React to change the state of the number.
    // I have create a useState setCount and set it's initial value as 0.
    // Later in the buttonplus view i have created a button design and used TouchableOpacity to trigger an onPress.
    // In the onPress i have called the function Setcount and on every press of the button it changes its value to (count+1) or (count-1) respectievly 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  indicatorbox: {
    height: 50,
    width: 50,
    backgroundColor: "grey",
    justifyContent: "center",
    marginTop: "30%",
    marginLeft: "44.5%",
    borderRadius: 10
  },
  countstyle: {
    textAlign: "center",
    fontSize: 24
  },
  desctxt: {
    textAlign: "center",
    marginTop: 140,
    fontSize: 18
  },
  buttonplus: {
    height: 50,
    width: 100,
    backgroundColor: "black",
    borderRadius: 10,
    marginLeft: "39%",
    marginTop: 20
  },
  txtbutton: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "400",
    fontSize: 20
  },
  desctxt1: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18
  }
});
