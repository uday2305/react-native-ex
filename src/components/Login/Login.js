import React , {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

export default class Login extends Component{
  render(){
  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../images/logo.png')}
          />
      </View>
      <View style={styles.appTitleContainer}>
        <Text>
          Untitled App
        </Text>
      </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF'
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
  },
  appTitleContainer:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    flexGrow:2

  },
  logo:{
    height:100,
    width:350
  }
});