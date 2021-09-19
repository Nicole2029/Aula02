import { StyleSheet } from 'react-native';

export const styleOneLinkHeader = StyleSheet.create({
    link:{
        color:"#4A4A4C",
    }
});

export const styles = StyleSheet.create({
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
    button:{
        backgroundColor:"#4369B0",
        //marginHorizontal:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        color:'white',
    },
    viewButton:{
        flex:1,
        
        justifyContent:'flex-end',
        paddingHorizontal:40,
        paddingVertical:40,
    },
    viewButtonText:{
        color:"#F5FFFF",
        fontSize:15,
    },
});
 
export const styleLinksTarefa = StyleSheet.create({
    container:{
        color:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:45,
        paddingVertical:20,
        
       
    },
});
export const styleLinksHeader = StyleSheet.create({
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
export const styleOneLinkTarefa = StyleSheet.create({
    link:{
        color:"#4A4A4C",
    }
});
