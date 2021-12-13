import {StyleSheet} from 'react-native';

export const styleLinksHeader = StyleSheet.create({
    containerr:{
        fontSize:25,
        backgroundColor:"#008069",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:35,
        paddingVertical:10,
    },
});
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header:{
        backgroundColor:"#008069",
        paddingVertical:5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:30,
    },
    inputLupa:{
        marginTop:60,
        marginLeft:175,
    },
    button:{
        backgroundColor:"#008069",
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginBottom:25,
    },
    viewButton:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:40,
    },
    viewButtonText:{
        color:"#F5FFFF",
        fontSize:15,
    },
    texto:{
        color:"white",
        fontSize:25,
        marginTop:50,
    },
    inputPontos:{
        paddingTop:63,
    },
});

export const styleOneLinkHeader = StyleSheet.create({
    link:{
        color:"white",
        fontSize: 16,
        fontWeight: "bold",

    }
});

