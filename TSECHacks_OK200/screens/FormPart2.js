import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const inputWidth = screenWidth - 24;

export default function FormPart2({navigation}) {
    const [coreValues, onChangeCoreValues] = React.useState('');
    const [mission, onChangeMission] = React.useState('');
    const [areasOfInterest, setAreasOfInterest] = React.useState([]);
    const [selectedArea, setSelectedArea] = React.useState('');

    const areasOfInterestOptions = [
        "Technology",
        "Healthcare",
        "Finance",
        "Education",
        "Other"
    ];

    const addAreaOfInterest = () => {
        if (selectedArea && !areasOfInterest.includes(selectedArea)) {
            setAreasOfInterest(prevAreas => [...prevAreas, selectedArea]);
        }
    };

    return (
        <View style={FormPart2Styles.container}>
            <View style={FormPart2Styles.header}>
                <MaterialCommunityIcons name="numeric-2-circle-outline" size={40} color="#456268" />
                <Text style={FormPart2Styles.headerText}>Company Values</Text>
            </View>
            <TextInput style={FormPart2Styles.input} placeholder="Core Values" value={coreValues} onChangeText={onChangeCoreValues} />
            <TextInput style={FormPart2Styles.input} placeholder="Mission" value={mission} onChangeText={onChangeMission} />
            
            <View style={FormPart2Styles.dropdownContainer}>
                <Text style={FormPart2Styles.dropdownLabel}>Areas of Interest</Text>
                <Picker
                    selectedValue={selectedArea}
                    onValueChange={(itemValue) => setSelectedArea(itemValue)}
                    style={FormPart2Styles.dropdown}
                >
                    {areasOfInterestOptions.map((option, index) => (
                        <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
                <Pressable
                    style={FormPart2Styles.addButton}
                    onPress={addAreaOfInterest}
                >
                    <Text style={FormPart2Styles.addButtonText}>Add Area</Text>
                </Pressable>
                <Text style={FormPart2Styles.selectedAreasText}>
                    Selected Areas of Interest: {areasOfInterest.join(', ')}
                </Text>
            </View>
            
            <Pressable
                style={FormPart2Styles.button}
                onPress={() => navigation.navigate('FormPart3')}
            >
                <Text style={FormPart2Styles.buttonText}>Next</Text>
            </Pressable>
        </View>
    );
}

const FormPart2Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FCF8EC",
    },
    header: {
        flex: 0.2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:80
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
        color: '#456268',
    },
    input: {
        width: inputWidth,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F5F5F5',
        borderColor: '#79A3B1',
        fontSize: 14
    },
    dropdownContainer: {
        width: inputWidth,
        margin: 12,
    },
    dropdownLabel: {
        fontSize: 16,
        marginBottom: 8,
        color: '#456268',
    },
    dropdown: {
        height: 45,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        borderColor: '#79A3B1',
    },
    button: {
        width: 150,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#456268',
        borderColor: '#79A3B1',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },

    addButton: {
        marginTop: 8,
        backgroundColor: '#456268',
        padding: 10,
        borderRadius: 10,
    },
    addButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    selectedAreasText: {
        marginTop: 8,
        fontSize: 16,
        color: '#456268',
    },
});