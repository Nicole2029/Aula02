import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#4369B0",
    },
    
    input: {
        height: 50,
        width:350,
        backgroundColor: '#FFF',
        marginTop: 30,
        paddingHorizontal: 24,
        fontSize: 16,
   
    },
  
    button: {
        width:350,
        backgroundColor: '#040761',
        height: 50,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 30,
        
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    inputTextView:{
        marginBottom:60,
        flexDirection:"row", 
        marginRight:80,
        marginTop: 100,
    },
    textInput:{
        fontSize: 40,
        fontWeight: 'bold',
        marginHorizontal: 20,
        
      
   },
    logo:{
        width: 65,
         height:65
    },
    link:{
        textDecorationLine: 'underline',
        color: '#FFF',
        marginTop: 150,
        
        
        

    },
});
