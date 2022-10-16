import { StyleSheet, Text, View } from 'react-native';
import React, {Component, useEffect, useState} from "react";
import Classes, {ClassesModel} from "./Classes";

export const Day = ({classes, weekDay}) => {
  return (
      <View style={styles.container}>
          <Text>{weekDay}</Text>
        {classes
            .filter(value => value.weekDay === weekDay)
            .map((value) =>
           (<Classes key={value.id} value={value} />)
        )}
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    
  },
});
