import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

const dados = ([
  {
    id:1,
    nome:"Nicole",
    chat: 'Lembrar da tarefa de matemática',
    foto:'https://i.pinimg.com/736x/6f/1e/fb/6f1efb3e2f7ddb6f6b9a3dbefabe0c67.jpg',
    hora: '                                                  08:05 da noite',
    }, 
    {
     id:2,
    nome:"Giliader",
    chat: 'Oi nicole vamos começar ? ',
    foto:'https://a-static.mlcdn.com.br/618x463/capa-para-estepe-ecosport-crossfox-gato-preto-cn950-lorben/focalouca/9478-1/fc6884d596a9e17e38b00fd297ddaa12.jpg',
    hora: '                                               05:15 da tarde',
    },
    {
    id:3,
    nome:"Maik",
    chat: 'Bom dia amor ',
    foto:'https://images8.alphacoders.com/864/thumb-1920-864900.png',
    hora: '                                                     07:00 da manhã',
    },
    {
    id:4,
    nome:"Mãe",
    chat: 'Vem pra casa ',
    foto:'https://media.istockphoto.com/photos/happy-family-having-fun-eating-cotton-candy-at-an-amusement-park-picture-id1051015254?k=20&m=1051015254&s=612x612&w=0&h=GpiwBq-Vrf5n9O5yk7YaPjedMoSzJnkSNMbC5dE2rRI=',
    hora: '                                                      08/12/2021',
    },
    {
    id:5,
    nome:"Turma 2029",
    chat: 'Vai ter aula hoje? ',
    foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Instituto_Federal_de_Mato_Grosso_do_Sul_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_de_Mato_Grosso_do_Sul_-_Marca_Vertical_2015.svg.png',
    hora: '                                        07/12/2021',
    },
    {
    id:6,
    nome:"Nicole",
    chat: 'Lembrar da tarefa de matemática',
    foto:'https://i.pinimg.com/736x/6f/1e/fb/6f1efb3e2f7ddb6f6b9a3dbefabe0c67.jpg',
    hora: '                                                  08:05 da noite',
    }, 
    {
    id:7,
    nome:"Giliader",
    chat: 'Oi nicole vamos começar ?',
    foto:'https://a-static.mlcdn.com.br/618x463/capa-para-estepe-ecosport-crossfox-gato-preto-cn950-lorben/focalouca/9478-1/fc6884d596a9e17e38b00fd297ddaa12.jpg',
    hora: '                                               05:15 da tarde',
    },
    {
    id:8,
    nome:"Maik",
    chat: 'Bom dia amor ',
    foto:'https://images8.alphacoders.com/864/thumb-1920-864900.png',
    hora: '                                                     07:00 da manhã',
    },
    {
    id:9,
    nome:"Mãe",
    chat: 'Vem pra casa ',
    foto:'https://media.istockphoto.com/photos/happy-family-having-fun-eating-cotton-candy-at-an-amusement-park-picture-id1051015254?k=20&m=1051015254&s=612x612&w=0&h=GpiwBq-Vrf5n9O5yk7YaPjedMoSzJnkSNMbC5dE2rRI=',
    hora: '                                                      08/12/2021',
    },
    {
    id:10,
    nome:"Turma 2029",
    chat: 'Vai ter aula hoje? ',
    foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Instituto_Federal_de_Mato_Grosso_do_Sul_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_de_Mato_Grosso_do_Sul_-_Marca_Vertical_2015.svg.png',
    hora: '                                        07/12/2021',
    },
    {
     id:11,
     nome:"Nicole",
     chat: 'Lembrar da tarefa de matemática',
     foto:'https://i.pinimg.com/736x/6f/1e/fb/6f1efb3e2f7ddb6f6b9a3dbefabe0c67.jpg',
     hora: '                                                  08:05 da noite',
     }, 
     {
      id:12,
     nome:"Giliader",
     chat: 'Oi nicole vamos começar ? ',
     foto:'https://a-static.mlcdn.com.br/618x463/capa-para-estepe-ecosport-crossfox-gato-preto-cn950-lorben/focalouca/9478-1/fc6884d596a9e17e38b00fd297ddaa12.jpg',
     hora: '                                               05:15 da tarde',
     },
     {
     id:13,
     nome:"Maik",
     chat: 'Bom dia amor ',
     foto:'https://images8.alphacoders.com/864/thumb-1920-864900.png',
     hora: '                                                     07:00 da manhã',
     },
]);

type Item={ id:number,
            nome:string,
            chat:string,
            foto:string,
            hora: string,
          }

export default function Post() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}

        renderItem={({item})=>{return(
        <View style={styles.renderItemAgendaContainer}>
          <View  >
            <Image style = {styles.containerFlatListImage} source={{uri:item.foto}}/>
          </View>
          <View>
            <Text>{item.nome}{item.hora}</Text>
            <Text>{item.chat}</Text>
          </View>
        </View>
      );}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerFlatListImage:{
    height:50,
    width:50,
    borderRadius:50,
    marginRight:15,
    marginLeft: 10,
  },
  renderItemAgendaContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical: 10,
    paddingHorizontal:5,
  }
});
