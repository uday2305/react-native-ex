import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

export default class LoginForm extends Component{
  render(){
    return(
      <View style={styles.container}>
        <TextInput
            style={styles.input}
          />
          <TextInput
              style={styles.input}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  input:{
    height:50,
    backgroundColor:'red'
  }
});
