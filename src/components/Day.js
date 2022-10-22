import { StyleSheet, Text, View } from 'react-native';
import React, { Component, useEffect, useState } from "react";
import Classes, { ClassesModel } from "./Classes";

export const Day = ({ classes, weekDay }) => {
  classes.sort((a, b) => a.count - b.count)
  return (
    <View style={styles.dayContainer}>
      <Text style={styles.dayNameContainer}>{weekDay}</Text>
      {classes
        .filter(value => value.weekDay === weekDay)
        .map((value) =>
          (<Classes key={value.id} value={value} />)
        )}
    </View>
  );

}

const styles = StyleSheet.create({
  dayContainer: {
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius: 30,
  },
  dayNameContainer: {
    marginBottom: 10,
    fontSize: 20,
    textAlign: "center",
  }
});
