import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

export default function SelectControl({ title, value, onChangeValue, items, ...otherProps }) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    selectedValue={value}
                    onValueChange={onChangeValue}
                    mode="dropdown"
                    {...otherProps}
                >
                    {items.map(item => <Picker.Item label={item} value={item} key={item} />)}
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 5,
    },
    container: {
        margin: 10,
        padding: 20,
    },
    picker: {
    },
    pickerContainer: {
        margin: 5,
        borderRadius: 30,
        borderWidth: 1,
        padding: 10
    }
});