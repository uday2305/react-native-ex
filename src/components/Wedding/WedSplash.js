import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ListView} from 'react-native';
import CustomListView from './ListView';
import Counter from './Counter';
import Blessings from './Blessings';
import DataSet from '../../Data/RowDataSet.json';

import * as firebase from 'firebase';
import Groom from './Groom';
import Bride from './Bride';
import Marriage from './Marriage';
import Reception from './Reception';
import Wishes from './Wishes';
import { StackNavigator } from 'react-navigation';

var config = {
   apiKey: "AIzaSyB5ah-KrvtKwIwGjMcUH8wlJDZUqWYintk",
   authDomain: "engagement-5acfb.firebaseapp.com",
   databaseURL: "https://engagement-5acfb.firebaseio.com",
   storageBucket: "engagement-5acfb.appspot.com",
   messagingSenderId: "1004052119509"
 };
 firebase.initializeApp(config);
class Home extends Component{
  static navigationOptions = {
      title: 'NagiUday Wedding Invitation',
      header:null
    };
  constructor(props){
    super(props);
  }
  _onPressButton = (a) =>{
        this.props.navigation.navigate(a);
     }
  render(){
    return(
      <View style={styles.wrapper}>
        <Image source={require('../../images/bg.jpg')} style={styles.backgroundImage}>
            <View style={{marginTop:75}}>
              <Text style={styles.textSmallFormat}>Request the pleasure of your company</Text>
              <Text style={styles.textFormat}>at the celebration of our marriage</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <View>
              <Image source={require('../../images/container.png')} style={styles.backgroundImageList}>
                <View style={{height: 300}}>
                  <CustomListView _onPressButton={this._onPressButton}/>
                </View>
                  <View style={{height: 50 ,marginTop:10,marginBottom:10}}>
                    <Counter />
                  </View>
                  <View>
                    <Blessings _onPressButton={this._onPressButton}/>
                  </View>
                </Image>
            </View>
            </View>
            <View>
              <Text style={styles.subTitle}>Developed by Uday Pulavarthi</Text>
            </View>
        </Image>
      </View>
    );
  }
}
const WebSplash = StackNavigator({
  Home:{screen: Home},
  Groom:{screen:Groom},
  Bride:{screen:Bride},
  Marriage:{screen:Marriage},
  Reception:{screen:Reception},
  Wishes:{screen:Wishes},
});
export default WebSplash;
  const styles = StyleSheet.create({
    wrapper:{
      flex: 1,
      flexDirection: 'row',
    },
    title:{
      color:'white',
      fontSize:20,
      fontWeight:'bold'
    },
    textDesc:{
      color:'#ac41f4',
      fontSize:15,
      textAlign:'center',
      width:200,
    },
    subTitle:{
      color:'white',
      marginBottom:8,
      fontSize:12,
      fontWeight:'200',
    },
    titleWrapper:{
      padding:10,
      height: 100
    },
    backgroundImage:{
      flex: 1,
      width: null,
      height: null,
      justifyContent:'center',
      alignItems:'center'
    },
    backgroundImageList:{
      width: 250,
      height: 440,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center'
    },
    textSmallFormat:{
      marginTop:5,
      fontFamily:'Arial',
      color:'white',
      fontSize:20
    },
    textFormat:{
      fontFamily:'Arial',
      color:'white',
      fontSize:20
    }
  });
