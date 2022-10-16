import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import React from 'react';
import { Component } from 'react';
import { ClassesModel } from '../components/Classes';
import TextControl from "../components/controls/TextControl";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class AddScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weekDay: "Monday",
            name: "",
            week: "both",
            url: "",
            address: "",
            professor: "",
            type: "lection",
            hours: "08",
            minutes: "30"
        }
    }

    generateUniqueId = () => {
        const { week, weekDay, name, url, address, professor, type, hours, minutes } = this.state;
        const time = hours + ":" + minutes
        return weekDay + name + time
    }

    onSubmit = async () => {
        const { week, weekDay, name, url, address, professor, type, hours, minutes } = this.state;
        const time = hours + ":" + minutes
        const id = this.generateUniqueId();
        try {
            const foundClasses = await AsyncStorage.getItem(id);
            if (foundClasses) {
                throw Error("Item with the same id already exists.")
            }
            const classes = new ClassesModel(weekDay, name, week, url, address, professor, type, time);
            await AsyncStorage.setItem(id, JSON.stringify(classes));
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Add classes</Text>

                <TextControl
                    title="Enter weekday"
                    value={this.state.weekDay}
                    onChangeValue={val => this.setState({ weekDay: val })}
                />
                <TextControl
                    title="Enter name"
                    value={this.state.name}
                    onChangeValue={val => this.setState({ name: val })}
                />



                <Text>Select weeks</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.week}
                    onValueChange={(val) => this.setState({week: val})}
                    mode="dropdown"
                >
                    <Picker.Item label="Both" value="both"/>
                    <Picker.Item label="First" value="first"/>
                    <Picker.Item label="Second" value="second"/>
                </Picker>

                <TextControl
                    textContentType="URL"
                    value={this.state.url}
                    onChangeValue={val => this.setState({ url: val })}
                    title="Enter Url"
                />

                <TextControl
                    value={this.state.address}
                    onChangeValue={val => this.setState({ address: val })}
                    title="Enter Address"
                />
                <TextControl
                    value={this.state.professor}
                    onChangeValue={val => this.setState({ professor: val })}
                    title="Enter Professor Name"
                />

                <Text>type</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.type}
                    onValueChange={(val) => this.setState({type: val})}
                    mode="dropdown"
                >
                    <Picker.Item label="Lection" value="lection"/>
                    <Picker.Item label="Lab" value="lab"/>
                    <Picker.Item label="Practical" value="practical"/>
                </Picker>

                <Text>Time</Text>
                <TextControl
                    value={this.state.hours}
                    onChangeValue={val => this.setState({ hours: val })}
                    type="numeric"
                    keyboardType='numeric'
                />
                <TextControl
                    value={this.state.minutes}
                    onChangeValue={val => this.setState({ minutes: val })}
                    type="numeric"
                    keyboardType='numeric'
                />

                <Button onPress={this.onSubmit} title={"Submit"}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        marginVertical: 30,
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "#666",
    },
});
