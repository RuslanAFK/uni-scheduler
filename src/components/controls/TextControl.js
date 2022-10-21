import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function TextControl({ title, value, onChangeValue, type, ...otherProps }) {
    return (
        <View>
            {title && (<Text style={styles.title}>{title}</Text>)}
            <TextInput
                style={type !== "numeric" ? styles.input : styles.numericInput}
                value={value.toString()}
                onChangeText={onChangeValue}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 5,
    },
    input: {
        fontSize: 16,
        margin: 5,
        borderRadius: 30,
        borderWidth: 1,
        padding: 10,
    },
    numericInput: {
        fontSize: 16,
        margin: 5,
        borderRadius: 30,
        borderWidth: 1,
        padding: 10,
        width: 150,
    }
});