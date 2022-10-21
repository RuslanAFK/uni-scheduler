import { Alert } from "react-native";

export const validateData = (data) => {
    const { name, url, address, professor, hours, minutes, count } = data;
    const urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
    const addressRegex = new RegExp(/^[A-Z][a-z\s\.,\d]{3,}$/);
    const professorRegex = new RegExp(/^[A-Z][a-z]+\s[a-zA-Z.\s]*$/);

    if (!/^[a-zA-Z]{3,}[a-zA-Z\s]*$/.test(name)) {
        Alert.alert("Name must contain at least 3 characters in Latin letters.");
        return false;
    }
    if (!/^[1-5]$/.test(count)) {
        Alert.alert("Count must be from 1 to 5.");
        return false;
    }
    if (!urlRegex.test(url) && url !== '') {
        Alert.alert("Copy and paste here a valid url.");
        return false;
    }

    if (!addressRegex.test(address) && address !== '') {
        Alert.alert("Provide correct address.");
        return false;
    }

    if(url === '' && address === '' ) {
        Alert.alert("Provide either url or adress.");
        return false;
    }

    if (!professorRegex.test(professor) ) {
        Alert.alert("Start with full second name.");
        return false;
    }

    if (!/^[0-1]?[0-9]$/.test(hours) || !/^[0-5][0-9]$/.test(minutes) ) {
        Alert.alert("Enter hour and minute correctly.");
        return false;
    }
    return true;
}