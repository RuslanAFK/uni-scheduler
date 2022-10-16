import {Text, TextInput, View} from "react-native";
import React from "react";

export default function SelectControl({title, value, onChangeValue, type, ...otherProps}) {
    return (
        <View>
            {title && (<Text>{title}</Text>)}
            <TextInput
                value={value}
                onChangeText={onChangeValue}
                {...otherProps}
            />
        </View>
    )
}