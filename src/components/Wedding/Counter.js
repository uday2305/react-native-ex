import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      days: '',
      hours:'',
      mins:'',
      secs:'',
      time:0,
      showCounter:true
    };
  }
  componentDidMount() {
    this.interval = setInterval(() =>this.updateTimer(), 1000);
}
updateTimer(){
  var d1=new Date(2017,4,18); d1.setHours(4);d1.setMinutes(54);
  var d2,milliseconds,seconds,minutes,hours,days;
  d2=new Date(); // now
  var diff=d2-d1,sign=diff<0?-1:1; //Diff in milliseconds
  //Showing the counter div for below date.
  if(sign===-1){
    diff/=sign; // or diff=Math.abs(diff);
    diff=(diff-(milliseconds=diff%1000))/1000;//extracting milliseconds unit
    diff=(diff-(seconds=diff%60<10 ? "0"+diff%60:diff%60))/60; //extracting seconds unit
    diff=(diff-(minutes=diff%60<10 ? "0"+diff%60:diff%60))/60; //extracting minutes unit
    days=(diff-(hours=diff%24<10 ? "0"+diff%24:diff%24))/24; //extracting days unit
    //Setting days,hours,minutes,seconds
    if(typeof(days)!=="String"){
      days = days.toString();
    }
    if(typeof(hours)!=="String"){
      hours = hours.toString();
    }
    if(typeof(minutes)!=="String"){
      minutes = minutes.toString();
    }
    if(typeof(seconds)!=="String"){
      seconds = seconds.toString();
    }
    this.setState({ days: days,hours:hours,mins:minutes,secs:seconds });
}
else{
  this.setState({showCounter:false});
  clearInterval(this.interval);
}
}

componentWillUnmount() {
  clearInterval(this.interval);
}

  render() {
          if(this.state.showCounter){
               return (
                 <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={require('../../images/counterCard.png')} style={styles.counterImage}>
                      <View style={styles.counterAlign}>
                      <Text  style={styles.textCenter}>{this.state.days}</Text>
                      <Text  style={styles.subTitleCenter}>Days</Text>
                    </View>
                  </Image>
                  <Image source={require('../../images/counterCard.png')} style={styles.counterImage}>
                    <View style={styles.counterAlign}>
                      <Text  style={styles.textCenter}>{this.state.hours}</Text>
                      <Text  style={styles.subTitleCenter}>Hours</Text>
                    </View>
                    </Image>
                    <Image source={require('../../images/counterCard.png')} style={styles.counterImage}>
                    <View style={styles.counterAlign}>
                      <Text  style={styles.textCenter}>{this.state.mins}</Text>
                      <Text  style={styles.subTitleCenter}>Mins</Text>
                    </View>
                    </Image>
                    <Image source={require('../../images/counterCard.png')} style={styles.counterImageLast}>
                    <View style={styles.counterAlign}>
                      <Text style={styles.textCenter}>{this.state.secs}</Text>
                      <Text  style={styles.subTitleCenter}>Secs</Text>
                    </View>
                    </Image>
                </View>
               );
             }
              else{
                return (
                  null
               );
              }
      }

}
const styles = StyleSheet.create({
  textCenter:{
    fontSize:25,
    textAlign:'center',
    fontFamily:'Arial',
    fontWeight:'bold',
    color:'#C8185C'
  },
  subTitleCenter:{
    fontSize:12.5,
    textAlign:'center',
    fontFamily:'Arial',
    fontWeight:'bold',
    color:'#C8185C'
  },
  counterImage:{
    width:50,
    height:50,
    marginLeft:10
  },
  counterImageLast:{
    width:50,
    height:50,
    marginLeft:10,
    marginRight:10,
  },
  boxContent:{
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'white'
  }
});
export default Counter;
