import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default class Splash extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Budget App</Text>
        </View>
        <Text style={styles.subTitle}>Powered by TCS</Text>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    wrapper:{
      backgroundColor:'#6dcff6',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    title:{
      color:'white',
      fontSize:50,
      fontWeight:'bold'
    },
    subTitle:{
      color:'white',
      fontSize:15,
      fontWeight:'200',
      paddingBottom:20
    },
    titleWrapper:{
      flex:1,
      justifyContent:'center'
    }

  });
