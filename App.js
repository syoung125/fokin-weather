import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}><Text>Hello1</Text></View>
      <View style={styles.blueView}><Text>Hello blue</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // container(부모)가 모든 공간을 사용하도록 함
    backgroundColor: '#fff',
  },
  yellowView: {
    flex: 2,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 1,
    backgroundColor: "blue"
  }
});
