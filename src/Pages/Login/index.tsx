import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { styles } from './styles';


const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.inputTextView}>
                    <Image style={styles.logo}source={
                        require("../../assets/logo.png")
                        }>
                    </Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Facebook"
                        placeholderTextColor="#F5FFFF"
                        >
                    </TextInput>
                </View>
     
     
              <TextInput  
              style={styles.input}
              placeholder="E-mail"
             />
    
             <TextInput  
              style={styles.input}
              placeholder=" Password"
             />
             <View style={styles.button}>
                <Text style={styles.buttonText}>
                    Log In
                </Text>
                
             </View>
             <Text style={styles.link}>
                 Sing Up for FaceBook
             </Text>

        </View>   
         
    );

}

export default Login;