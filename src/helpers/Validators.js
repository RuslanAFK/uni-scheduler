import { Alert } from "react-native";

export const validateData = (data) => {
    const { name, url, address, professor, hours, minutes, count } = data;
    const urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
    const addressRegex = new RegExp(/^[А-ЩЬЮЯҐЄІЇA-Z][а-щьюяґєіїa-z\s.,']{3,}$/);
    const professorRegex = new RegExp(/^[А-ЩЬЮЯҐЄІЇA-Z][a-zа-щьюяґєії']+\s?[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-za-z.'\s]*$/);

    if (!/^[А-ЩЬЮЯҐЄІЇA-Z][А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z']{2,}[А-ЩЬЮЯҐЄІЇа-щьюяґєіїA-Za-z'\s]*$/.test(name)) {
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