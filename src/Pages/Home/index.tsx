import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput , TouchableOpacity} from 'react-native';
import { styleLinksHeader, styleOneLinkHeader, styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParamList} from './types';
import { styleOneLinkTarefa, styleLinksTarefa } from './styles';

const OneLinkHeader = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
        </View>
    );
};

const LinksHeader = ()=>{
    return(
        <View style={styleLinksHeader.container}>
            <OneLinkHeader nome="Home"/>
            <OneLinkHeader nome="Post"/>
            <OneLinkHeader nome="Videos"/>
            <OneLinkHeader nome="Photos"/>
            <OneLinkHeader nome="Community"/>
        </View>
    );
};
type HomePros = NativeStackNavigationProp<StackNavigatorParamList,'Home'>;
const OneLinkTarefa = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkTarefa.link}>{props.nome}</Text>
        </View>
    );
};

const LinksTarefa = ()=>{
    return(
        <View style={styleLinksTarefa.container}>
            <Image source={
                    require("../../assets/link-like.png")
                    }>
                </Image>
            <OneLinkTarefa nome="Link"/>
            <Image source={
                    require("../../assets/link-coment.png")
                    }>
                </Image>
            <OneLinkTarefa nome="Comment"/>
            <Image source={
                    require("../../assets/link-share.png")
                    }>
                </Image>
            <OneLinkTarefa nome="Share"/>
        </View>
    );
};
/*fffffffffffffffff*/

const Home = () => {
    const navigation = useNavigation<HomePros>();
    function irParaTelaLogin(){
        // console.log("oi");
        navigation.navigate('Login');
    }  
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image source={
                    require("../../assets/arrow-left.png")
                    }>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/ei_search.png")
                        }>
                    </Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        >
                        

                    </TextInput>
                </View>
                <Image source={
                    require("../../assets/share.png")
                    }>
                </Image>
            </View>
           
            <LinksHeader></LinksHeader>
            <LinksTarefa></LinksTarefa>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={irParaTelaLogin}>
                    <Text style={styles.viewButtonText}> Ir para outra tela</Text>
                </TouchableOpacity>

        </View>
        </View>
    );

}

export default Home;