import { StyleSheet, View } from 'react-native';
import React from 'react';
import HomeStack from "./src/routes/HomeStack";


export default function App() {
  return (
    <View style={styles.container}>
      <HomeStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
