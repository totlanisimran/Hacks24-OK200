import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Modal, Alert } from "react-native";
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ConfettiCannon from "react-native-confetti-cannon";

const screenWidth = Dimensions.get('window').width;
const inputWidth = screenWidth - 24;

export default function Eligibility({ navigation }) {
    const [turnover, setTurnover] = useState('');
    const [netWorth, setNetWorth] = useState('');
    const [netProfit, setNetProfit] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const checkEligibility = () => {
        const isEligible = parseFloat(turnover) > 1000 || parseFloat(netWorth) > 500 || parseFloat(netProfit) > 5;

        if (isEligible) {
            setShowConfetti(true);
            setModalVisible(true);
        } else {
            Alert.alert("Not Eligible", "Your company does not meet the eligibility criteria.");
        }
    };

    const closeModal = () => {
        setShowConfetti(false);
        setModalVisible(false);
    };

    return (
        <View style={EligibilityFormStyles.container}>
            <View style={EligibilityFormStyles.header}>
                <MaterialCommunityIcons name="numeric-2-circle-outline" size={40} color="#456268" />
                <Text style={EligibilityFormStyles.headerText}>Eligibility</Text>
            </View>
            <TextInput
                style={EligibilityFormStyles.input}
                placeholder="Turnover"
                value={turnover}
                onChangeText={(text) => setTurnover(text)}
                keyboardType="numeric"
            />
            <TextInput
                style={EligibilityFormStyles.input}
                placeholder="Net Worth"
                value={netWorth}
                onChangeText={(text) => setNetWorth(text)}
                keyboardType="numeric"
            />
            <TextInput
                style={EligibilityFormStyles.input}
                placeholder="Net Profit"
                value={netProfit}
                onChangeText={(text) => setNetProfit(text)}
                keyboardType="numeric"
            />

            <Pressable
                style={EligibilityFormStyles.button}
                onPress={checkEligibility}
            >
                <Text style={EligibilityFormStyles.buttonText}>Check Eligibility</Text>
            </Pressable>

            <Modal
                animationType='fade'
                transparent={false}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <View style={EligibilityFormStyles.modalContainer}>
                    <Text style={EligibilityFormStyles.modalText}>Congratulations!</Text>
                    <Text style={EligibilityFormStyles.modalText}>
                        Your company is eligible for CSR proceedings.
                    </Text>
                    {showConfetti && (
                        <ConfettiCannon
                            count={200}  // Number of confetti particles
                            origin={{ x: -10, y: 0 }}  // Point where confetti will appear
                            autoStart={true}  // Start automatically
                        />
                    )}
                    <Pressable
                        style={EligibilityFormStyles.modalButton}
                        onPress={closeModal}
                    >
                        <Text style={EligibilityFormStyles.modalButtonText}>Close</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
}

const EligibilityFormStyles = StyleSheet.create({
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
        alignItems: 'center',
        marginBottom: 80,
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
    button: {
        width: 200,
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D0D0D0',
    },
    modalText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#456268',
        margin: 20,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: '#456268',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    modalButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});
