import React , {Component} from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
});
export default class Row extends Component{
  constructor(props){
    super(props);
    this.state = {icon:''};
  if(props.picture === "bride")
  {
    this.state.icon = require('../../images/bride.png');
  }
  else if(props.picture === "groom")
  {
    this.state.icon = require('../../images/groom.png');
  }
  else if(props.picture === "marriage")
  {
    this.state.icon = require('../../images/marriage.jpg');
  }
  else if(props.picture === "reception")
  {
    this.state.icon = require('../../images/reception.png');
  }
}
render(){
  return(
<TouchableOpacity  onPress = { () => this.props._onPressButton(this.props.title)}>
  <View style={styles.container}>
    <Image
          source={this.state.icon}
          style={styles.photo}
    />
    <Text style={styles.text}>
            {this.props.title}
    </Text>
  </View>
  </TouchableOpacity>
);
}
}
