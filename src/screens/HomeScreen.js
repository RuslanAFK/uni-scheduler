import { StyleSheet, View, Button } from 'react-native';
import {Day} from '../components/Day';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function HomeScreen({navigation}) {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetchClasses()
    }, [])


    const fetchClasses = async () => {
        const keys = await AsyncStorage.getAllKeys();
        const myClassesRaw = await AsyncStorage.multiGet(keys);
        const myClasses = myClassesRaw.map((value, index, array)=> {
            const oneClasses = JSON.parse(array[index][1])
            oneClasses['id'] = array[index][0]
            return oneClasses
        })
        setClasses(myClasses)
    };

    const pressHandler = () => {
        navigation.navigate('Add')
    }

    return (
        <View style={styles.container}>
            <Button title="Add Classes" onPress={pressHandler} />
            <Day classes={classes} weekDay={"Monday"} />
            <Day classes={classes} weekDay={"Tuesday"} />
            <Day classes={classes} weekDay={"Wednesday"} />
            <Day classes={classes} weekDay={"Thursday"} />
            <Day classes={classes} weekDay={"Friday"} />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {

    },
});
