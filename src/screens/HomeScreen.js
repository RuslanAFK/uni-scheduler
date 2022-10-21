import { StyleSheet, View, Button, ScrollView, Alert } from 'react-native';
import { Day } from '../components/Day';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function HomeScreen({ navigation }) {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetchClasses()
    }, [classes])


    const fetchClasses = async () => {
        const keys = await AsyncStorage.getAllKeys();
        const myClassesRaw = await AsyncStorage.multiGet(keys);
        try {
            const myClasses = myClassesRaw.map((value, index, array) => {
                const oneClasses = JSON.parse(array[index][1])
                oneClasses['id'] = array[index][0]
                return oneClasses
            })
            setClasses(myClasses)
        } catch (err) {
        }
    };

    const pressHandler = () => {
        navigation.navigate('Add')
    }

    return (
        <ScrollView style={styles.container} onTouchStart={() => fetchClasses()}>
            <Button title="Add Classes" onPress={pressHandler} />
            <Day classes={classes} weekDay={"Monday"} />
            <Day classes={classes} weekDay={"Tuesday"} />
            <Day classes={classes} weekDay={"Wednesday"} />
            <Day classes={classes} weekDay={"Thursday"} />
            <Day classes={classes} weekDay={"Friday"} />
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
    },
});
