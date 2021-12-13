import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { styleLinksHeader, styleOneLinkHeader, styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import Post from '../Post';

const OneLinkHeader = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
        </View>
    );
};

const LinksHeader = ()=>{
    return(
        <View style={styleLinksHeader.containerr} >
            <OneLinkHeader nome="Conversas"/>
            <OneLinkHeader nome="Status"/>
            <OneLinkHeader nome="Chamadas"/>
        </View>
    );
};

const Home = () => {
    const navigation = useNavigation();

    function handleNavigateToContatos(){
      navigation.navigate('Contatos');
    }; 
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text style={styles.texto}>
                    WhatsApp
                </Text>
                <View style={styles.inputLupa}>
                    <Image source={require("../../assets/lupa.png")}/>
                </View>
                <View style={styles.inputPontos}>
                    <Image source={require("../../assets/dots.png")}/>
                </View> 
            </View>
            <LinksHeader></LinksHeader>
            <ScrollView>
                <Post/>
            </ScrollView>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={handleNavigateToContatos}>
                    <Text style={styles.viewButtonText}> Ir para contatos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;