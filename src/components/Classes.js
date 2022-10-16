import { StyleSheet, Text, View } from 'react-native';
import React from "react";


export class ClassesModel {
  constructor(weekDay, name, week, url, address, professor, type, time) {
    this.weekDay = weekDay;
    this.name = name;
    this.week = week;
    this.url = url;
    this.address = address;
    this.professor = professor;
    this.type = type;
    this.time = time;
  }
}

export default function Classes({ value }) {
  return (
    <View style={styles.container}>
      <Text>{"Name: " + value.name}</Text>
      <Text>{"Week: " + value.week}</Text>
      <Text>{"Url: " + value.url}</Text>
      <Text>{"Address: " + value.address}</Text>
      <Text>{"Professor: " + value.professor}</Text>
      <Text>{"Type: " + value.type}</Text>
      <Text>{"Time: " + value.time}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
