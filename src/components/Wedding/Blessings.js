import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import * as firebase from 'firebase';

class Blessings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      btnTxt:'',
      thanksIndMsg:'',
      showThanksIndMsg:false,
      overlayerStatus:false
    };
  }
  componentDidMount(){
    const messageKeyRef = firebase.database().ref().child('react');
    const thanksIndMsgRef = messageKeyRef.child('thanksIndMessage');
    const buttonTextRef = messageKeyRef.child('buttonTextRef');
    thanksIndMsgRef.on('value', msg =>{
      this.setState({
        thanksIndMsg:msg.val()
      });
    });
    buttonTextRef.on('value', msg =>{
      this.setState({
        btnTxt:msg.val()
      });
    });
  }
  render(){
    return(
      <TouchableOpacity
          onPress={ () => this.props._onPressButton("Wishes")}
         style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Share Your Wishes</Text>
      </TouchableOpacity>
    );
  }


}
export default Blessings;
const styles = StyleSheet.create({
  buttonText:{
    textAlign:'center',
    color:'white',
    fontSize:15,
    marginTop:10,
    fontFamily:'Arial',
    fontWeight:'bold'
  },
  buttonContainer:{
    backgroundColor:'#A81C5F',
    width:200,
    height:40,
    borderRadius:20,
  }
});
