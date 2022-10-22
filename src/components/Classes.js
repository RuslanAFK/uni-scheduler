import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from "react";
import { weeks } from '../db-holder/SelectItems';
import { generateUniqueId } from '../helpers/Helpers';
import AsyncStorage from '@react-native-async-storage/async-storage'


export class ClassesModel {
  constructor(weekDay, name, week, url, address, professor, type, time, count) {
    this.weekDay = weekDay;
    this.name = name;
    this.week = week;
    this.url = url;
    this.address = address;
    this.professor = professor;
    this.type = type;
    this.time = time;
    this.count = count;
  }
}

export default function Classes({ value }) {

  const { name, address, professor, type, time, week, url, weekDay, count } = value;

  const onAddressPress = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }

  const onLongPressHandler = () => {
    const id = generateUniqueId(weekDay, name, time);
    Alert.alert(
      `Do you want to delete ${name} at ${time} ${weekDay}?`,
      "Answer below",
      [
        {
          text: "No",
          onPress: () => { },
          style: "cancel"
        },
        {
          text: "Yes", onPress: async () => {
            try {
              await AsyncStorage.removeItem(id)
            } catch (err) {
            }
          }
        }
      ])
  }

  return (
    <TouchableOpacity style={styles.classesContainer} onLongPress={onLongPressHandler}>
      <Text
        style={url === '' ? styles.nameContainer : styles.nameLinkContainer}
        onPress={url === '' ? () => { } : onAddressPress}
      >
        {`${count}. ${name}`}
      </Text>

      {week !== weeks[0] && <Text style={styles.classesPropContainer}>
        {week}
      </Text>}

      {address !== '' && <Text style={styles.classesPropContainer}>
        {address}
      </Text>}

      <Text style={styles.classesPropContainer}>
        {`${type} at ${time}`}
      </Text>

      <Text style={styles.classesPropContainer}>
        {"Professor: " + professor}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  classesContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  classesPropContainer: {

  },
  nameContainer: {
    textAlign: "center",
  },
  nameLinkContainer: {
    textAlign: "center",
    color: 'blue',
  }
});
