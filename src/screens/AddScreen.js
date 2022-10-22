import { Alert, Button, ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Component } from 'react';
import { ClassesModel } from '../components/Classes';
import TextControl from "../components/controls/TextControl";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { classesTypes, weekdays, weeks } from '../db-holder/SelectItems';
import SelectControl from '../components/controls/SelectControl';
import { generateUniqueId } from '../helpers/Helpers';
import { validateData } from '../helpers/Validators';

export default class AddScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weekDay: weekdays[0],
            name: "",
            week: weeks[0],
            url: "",
            address: "",
            professor: "",
            type: classesTypes[0],
            hours: 8,
            minutes: 30,
            count: 1,
        }
    }

    onSubmit = async () => {
        if (!validateData(this.state)) {
            return;
        }
        const { week, weekDay, name, url, address, professor, type, hours, minutes, count } = this.state;
        const time = hours + ":" + minutes
        const id = generateUniqueId(weekDay, name, time);
        try {
            const foundClasses = await AsyncStorage.getItem(id);
            if (foundClasses) {
                throw Error("Item with the same id already exists.")
            }
            const classes = new ClassesModel(weekDay, name, week, url, address, professor, type, time, count);
            await AsyncStorage.setItem(id, JSON.stringify(classes));

            Alert.alert(`${name} at ${time} ${weekDay} was successfully added!`);
        } catch (error) {
            Alert.alert(error.message);
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <SelectControl
                    title="Select weekday"
                    value={this.state.weekDay}
                    onChangeValue={val => this.setState({ weekDay: val })}
                    items={weekdays}
                />
                <TextControl
                    title="Enter name"
                    value={this.state.name}
                    onChangeValue={val => this.setState({ name: val })}
                />

                <SelectControl
                    selectedValue={this.state.week}
                    onValueChange={(val) => this.setState({ week: val })}
                    items={weeks}
                    title="Select week"
                />

                <TextControl
                    type="numeric"
                    keyboardType='numeric'
                    value={this.state.count}
                    onChangeValue={val => this.setState({ count: val })}
                    title="Enter Count"
                />

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

                <SelectControl
                    title="Select type"
                    selectedValue={this.state.type}
                    onValueChange={(val) => this.setState({ type: val })}
                    items={classesTypes}
                />

                <TextControl
                    title="Enter hours and minutes"
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
                <Button onPress={this.onSubmit} title={"Submit"} />
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});
