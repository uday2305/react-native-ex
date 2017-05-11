import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ListView} from 'react-native';

export default class Marriage extends Component{
  static navigationOptions = {
      title:'Marriage',
      headerStyle:{backgroundColor: '#AA210E',justifyContent:'center'},
      headerTitleStyle :{color:'white',justifyContent:'center'},
      headerTintColor:'white'
    };
  render(){
    return(
      <View style={styles.wrapper}>
        <Image source={require('../../images/darkBG.png')} style={styles.backgroundImage}>

            <View style={{alignItems:'center',marginTop:10}}>
              <Image
                    source={require('../../images/udayNagi.jpg')}
                    style={styles.photo}
              />
            <View style={{alignItems:'center',marginTop:10}}>
              <Image
                    source={require('../../images/ornament.png')}
                    style={styles.ornamentphoto}
              />
            </View>

            <Text style={styles.textSmallFormat}>On Wednesday 17th May, 2017</Text>
            <Text style={styles.textSmallFormat}>at</Text>
            <Text style={styles.textSmallFormat}>Sri Vasavi Kanayakaparmeswari</Text>
              <Text style={styles.textSmallFormat}>Function Hall,</Text>
            <Text style={styles.textSmallFormat}>Kotagummam Center, Pithapuram</Text>
              <View style={{alignItems:'center',marginTop:10}}>
                <Image
                      source={require('../../images/ornament.png')}
                      style={styles.ornamentphoto}
                />
              </View>
            <Text style={styles.textWithMargin}>Dinner to follow</Text>
          </View>
            </Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage:{
    flex: 1,
    width: null,
    height: null,
  },
  textFormat:{
    fontFamily:'Arial',
    fontWeight:'bold',
    color:'white',
    fontSize:30
  },
  textSmallFormat:{
    marginTop:5,
    fontFamily:'Arial',
    fontWeight:'bold',
    color:'white',
    fontSize:20
  },photo: {
    height: 200,
    width: 300,
    borderRadius: 10
  }, ornamentphoto:{
    height: 25,
    width: 150,
  }, container: {
      flex: 1,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color:'white',
      marginLeft: 12,
      fontSize: 20,
    },textWithMargin:{
      marginTop:15,
      fontFamily:'Arial',
      fontWeight:'bold',
      color:'white',
      fontSize:20
    }

});
