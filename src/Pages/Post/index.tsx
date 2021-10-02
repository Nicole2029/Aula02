import React from 'react';
import {View , Text , StyleSheet , Image , TouchableOpacity} from 'react-native';

export const Post = () =>{
    return(
        <View style={styles.componente}>
            <View style={styles.headerView}>
                <View style={styles.headerViewFoto}>
                
                </View>
                <View style={styles.headerViewTextos}>
                    <Text style={styles.headerViewTextosTitulo}>Unblast</Text>
                    <View style={styles.headerViewTextosHorario}>
                        <Text>2hrs</Text>
                        <Image 
                            style={styles.headerViewImageGlobo} 
                            source={require('../../assets/globo.png')} 
                            />
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.TextoPublicacao}>
                    Este é o design que vamos replicar hoje na aula: <Text style={styles.TextoPublicacaoLink}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text>
                </Text>
                <Image 
                            style={styles.headerViewImagePulicacao} 
                            source={require('../../assets/image.png')} 
                            />
            </View>
            <View style={styles.likes}>
                <Image style={styles.likesButton}  source={require('../../assets/likes.png')}/>
                <Text style={styles.likesText}>12</Text>
            </View>

            <View style={styles.linkeShare}>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo}  source={require('../../assets/like.png')}/>
                    <Text style={styles.linkeShareItemText}>Like</Text>
                </View>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo}  source={require('../../assets/comentario.png')}/>
                    <Text style={styles.linkeShareItemText}>Comentário</Text>
                </View>
                <View style={styles.linkeShareItem}>
                    <Image style={styles.headerViewImageGlobo}  source={require('../../assets/like.png')}/>
                    <Text style={styles.linkeShareItemText}>Share</Text>
                </View>
            </View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Text style={styles.viewButtonText}> Learn More</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMensager} onPress={()=>{}}>
                    <Image style={{width:16,height:16}} source={require('../../assets/btnmensagem.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMais}  onPress={()=>{}}>
                    <Image style={{height:3,width:13}} source={require('../../assets/3pontos.png')}/>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    componente:{
        flex:1,
        padding:30,
    },
    headerView:{
        flexDirection:'row',
    },
    headerViewFoto:{
        backgroundColor:'#4369B0',
        height:60,
        width:60,
        borderRadius:50,
    },
    headerViewTextos:{
        paddingLeft:20,
        justifyContent:'space-around',
    },
    headerViewTextosTitulo:{
        fontWeight:'bold',
        fontSize:16,
    },
    headerViewImageGlobo:{
        height:17,
        width:17,
        marginLeft:5,
    },
    headerViewTextosHorario:{
        flexDirection:'row',
        alignItems:'center',
    },
    TextoPublicacao:{
        marginTop:20,
        fontSize:15,
    },
    TextoPublicacaoLink:{
        color: '#4D6196',
    },
    headerViewImagePulicacao:{
        width:358,
        height:282,
    },
    likesButton:{
        height:30,
        width:30,
    },
    likes:{
        marginTop:10,
        flexDirection:'row',
    },
    likesText:{
        textAlignVertical:'center',
        paddingLeft:8,
    },
    linkeShare:{
        flexDirection:'row',
        marginHorizontal:30,
        marginVertical:20,
        justifyContent:'space-between'
    },
    linkeShareItem:{
        flexDirection:'row',
        alignItems:'center',
    },
    linkeShareItemText:{
        paddingLeft:5,
    },
    viewButton:{
        // backgroundColor:'#3D7BE2',
        // alignItems:'center',
        // justifyContent:'center',
        borderRadius:5,
        flexDirection:'row',
        
        
        
    },
    button:{
        flex:5,
        backgroundColor:'#3D7BE2',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    viewButtonText:{
        color: '#FDF7FD',
        fontSize:15,
        height:43,
        textAlignVertical:'center',
        

    },
    buttonMensager:{
        flex:1,
        backgroundColor: '#3D7BE2',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        borderRadius:5,
    },
    buttonMais:{
        flex:1,
        borderColor: '#3D7BE2',
        borderWidth:1,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    //hook> useState

});