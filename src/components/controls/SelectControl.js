import {Text, TextInput, View} from "react-native";
import React from "react";
import {Picker} from "@react-native-picker/picker";

export default function TextControl({title, value, onChangeValue, type, children,  ...otherProps}) {
    return (
        <View>
            <Text>{title}</Text>
            <Picker
                style={styles.picker}
                selectedValue={this.state.type}
                onValueChange={(val) => this.setState({type: val})}
                mode="dropdown"
            >
                {children}
            </Picker>
        </View>
    )
}