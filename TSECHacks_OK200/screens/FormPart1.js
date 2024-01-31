import React from "react";
import { View,Text,TextInput, StyleSheet,Pressable } from "react-native";
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const inputWidth = screenWidth - 24;

export default function FormPart1({navigation}) {
    const [name,onChangeName] = React.useState('');
    const [foundedYear,onChangeFoundedYear] = React.useState('');
    const [website,onChangeWebsite] = React.useState('');
    const [contactEmail,onChangeContactEmail] = React.useState('')

    return(
        <View style={FormPart1Styles.container}>
            <View style={FormPart1Styles.header}>
                <MaterialCommunityIcons name="numeric-1-circle-outline" size={40} color="#F18C8E" />
                <Text style={FormPart1Styles.headerText}>About the Company</Text>
            </View>
            <TextInput style={FormPart1Styles.input} placeholder="Company Legal Name" value={name} onChangeText={onChangeName}/>
            <TextInput style={FormPart1Styles.input} placeholder="Founding Year" value={foundedYear} onChangeText={onChangeFoundedYear}/>            
            <TextInput style={FormPart1Styles.input} placeholder="Website URL" value={website} onChangeText={onChangeWebsite}/>
            <TextInput style={FormPart1Styles.input} placeholder="Contact Email" value={contactEmail} onChangeText={onChangeContactEmail}/>
            <Pressable 
                style={FormPart1Styles.button}
                 onPress={() => navigation.navigate('FormPart2')}
                >
                {/* <Text style={loginStyles.buttonText}>{loggedIn ? 'New Login' : 'Login'}</Text> */}
                <Text style={FormPart1Styles.buttonText}>Next</Text>
            </Pressable>
        </View>
    )
}

const FormPart1Styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:"#F8EDE3",
    },
    header:{
        flex: 0.2,
        alignItems:'flex-start',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:80
    },
    headerText:{
        fontSize:30,
        fontWeight:'800',
        color:'#305F72',
    },
    input:{
        width:inputWidth,
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F5F5F5',
        borderColor:'#305F72',
        fontSize: 14
    },
    button: {
        width:150,
        padding: 10,
        marginVertical: 8,
        margin: 100,
        backgroundColor: '#F18C8E',
        borderColor: '#F18C8E',
        borderWidth: 2,
        borderRadius: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
})  