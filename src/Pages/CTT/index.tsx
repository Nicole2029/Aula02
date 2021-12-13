import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

const dados = ([
  {
    id:1,
    nome:"Novo Grupo",
    foto:'https://tix.life/wp-content/uploads/2020/06/whatsapp-grupo-icon.png',
    }, 
    {
     id:2,
    nome:"Novo Contato", 
    foto:'https://previews.123rf.com/images/alexwhite/alexwhite1503/alexwhite150304891/38144378-add-contact-green-flat-icon.jpg',
    },
    {
    id:3,
    nome:"Amanda",
    chat: 'Nunca pise em cima de ninguém',
    foto:'https://uploads.metropoles.com/wp-content/uploads/2021/11/24095244/Amanda-Albach-600x400.jpg',
    },
    {
    id:4,
    nome:"Beatriz",
    chat: 'To com fome ',
    foto:'data:image/jpeg;base64,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',
    },
    {
    id:5,
    nome:"Carmona",
    chat: 'Tudo que eu quero é só um pouco de paz ',
    foto:'https://www.tiktok.com/api/img/?itemId=6976037395984682246&location=0&aid=1988',
    },
    {
    id:6,
    nome:"Daniel",
    chat: '#@!@#$',
    foto:'https://assetsnffrgf-a.akamaihd.net/assets/m/1102021062/univ/art/1102021062_univ_sqr_xl.jpg',
    }, 
    {
    id:7,
    nome:"Giliader",
    chat: '$%**Life goes on**$%',
    foto:'https://t8j5n5j3.rocketcdn.me/wp-content/uploads/2019/09/gato-preto.jpg',
    },
    {
    id:8,
    nome:"Karla",
    chat: ' S2 ',
    foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6guopNtYstz1SW6avRNanqavlMEsgUnxyg&usqp=CAU',  
    },
    {
    id:9,
    nome:"Maicon",
    chat: ' ... ',
    foto:'data:image/jpeg;base64,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',
    },
    {
    id:10,
    nome:"Nicole",
    chat: '. ',
    foto:'https://i.pinimg.com/280x280_RS/dc/31/ca/dc31caaf14a36ee9089f0858cf680d33.jpg',
    },
    {
    id:11,
    nome:"Sayenne",
    chat: ' . ',
    foto:'https://pbs.twimg.com/profile_images/1315813185342132226/1y-6OAsN.jpg',
    },
    {
    id:12,
    nome:"Amanda",
    chat: 'Nunca pise em cima de ninguém',
    foto:'https://uploads.metropoles.com/wp-content/uploads/2021/11/24095244/Amanda-Albach-600x400.jpg',
    },
    {
    id:13,
    nome:"Beatriz",
    chat: 'To com fome ',
    foto:'data:image/jpeg;base64,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',
    },
    {
    id:14,
    nome:"Carmona",
    chat: 'Tudo que eu quero é só um pouco de paz ',
    foto:'https://www.tiktok.com/api/img/?itemId=6976037395984682246&location=0&aid=1988',
    },
  
]);

type Item={ id:number,
            nome:string,
            chat:string,
            foto:string,
          }

export default function CTT() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={({item})=>{return(
        <View style={styles.renderItemAgendaContainer}>
          <View>
            <Image style = {styles.containerFlatListImage} source={{uri:item.foto}}/>
          </View>
          <View>
            <Text>{item.nome}</Text>
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
    backgroundColor: 'white',
  },
  renderItemAgendaContainer:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal:5, 
  },
  containerFlatListImage:{
    height:50,
    width:50,
    backgroundColor:'white',
    borderRadius:50,
    marginRight:15,
    marginLeft: 10,
  },
 
});