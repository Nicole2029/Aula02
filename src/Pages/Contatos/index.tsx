import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import CTT from '../CTT';

const Contatos = () => {
    const navigation = useNavigation();

    function handleNavigateToHome(){
      navigation.navigate('Home');
    }; 
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />    
            <View style={styles.header}>
                <TouchableOpacity style={styles.inputFlexa} onPress={handleNavigateToHome}>
                    <Image source={require("../../assets/flexa.png")}/>
                </TouchableOpacity>
                <View>
                    <Text style={styles.texto}>
                        Contatos
                    </Text>
                    <Text style={styles.numero}>
                        169 contatos
                    </Text>     
                </View>
                <View style={styles.inputLupa}>
                    <Image source={require("../../assets/lupa.png")}/>
                </View>
                <View style={styles.inputPontos}>
                    <Image source={require("../../assets/dots.png")}/>
                </View>  
            </View>
            <CTT/>
        </View>
    );
}

export default Contatos;