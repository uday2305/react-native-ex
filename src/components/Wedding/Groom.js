import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ListView} from 'react-native';

export default class Groom extends Component{
  static navigationOptions = {
      title:'Groom',
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
                    source={require('../../images/uday_2.jpg')}
                    style={styles.photo}
              />
            <Text style={styles.textFormat}>chi. Uday Pulavarthi</Text>
            <Text style={styles.textSmallFormat}>s/o Sri. Badari Narayana</Text>
            <Text style={styles.textSmallFormat}>&</Text>
            <Text style={styles.textSmallFormat}>Smt. Venkata Narasamamba</Text>
            <Text style={styles.textSmallFormat}>of</Text>
            <Text style={styles.textMediumFormat}>Rajahmahendravaram</Text>
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
  },
  textMediumFormat:{
    marginTop:5,
    fontFamily:'Arial',
    fontWeight:'bold',
    color:'white',
    fontSize:25
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 75
  },  container: {
      flex: 1,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color:'white',
      marginLeft: 12,
      fontSize: 20,
    },

});
