import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const OneLinkHeader = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
        </View>
    );
};
const styleOneLinkHeader = StyleSheet.create({
    link:{
        color:"#4A4A4C",
    }
});

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



const OneLinkTarefa = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkTarefa.link}>{props.nome}</Text>
        </View>
    );
};
const styleOneLinkTarefa = StyleSheet.create({
    link:{
        color:"#4A4A4C",
    }
});

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
const styleLinksTarefa = StyleSheet.create({
    container:{
        color:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:45,
        paddingVertical:20,
        
       
    },
});





const styleLinksHeader = StyleSheet.create({
    container:{
        color:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:35,
        paddingVertical:10,
        borderBottomColor:"#F0F0F0",
        borderBottomWidth:3,
    },
});

const Home = () => {
    
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

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header:{
        minHeight:70,
        backgroundColor:"#4369B0",
        paddingVertical:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30,
        paddingTop:50,
    },
    inputTextView:{
        flex:1,
        borderRadius:28,
        backgroundColor:"#2C4877",
        marginHorizontal: 10,
        height:40,
        alignItems:"center",
        flexDirection:"row",
    },
    textInput:{
        flex:1,
        paddingRight:10,
        color:"#F5FFFF",
    },
});

export default Home;