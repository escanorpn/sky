import  React, { Component } from 'react';
import {ScrollView, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
// import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card,Button,List, Paragraph } from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';
import { Col, Row, Grid } from "react-native-easy-grid";
// export default function App() {
  
class Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
       item_views: [],
       info:"",
       info1:"This is an in-app notification snackbar to show to the user when they perform an action.Clicking it should change the text.",
       info2:"User clicked snackbar",
       snack:false,
       data:[{goal:"Goal 1", amount:"12,000"},{goal:"Goal 2", amount:"12,000"}]
    };
  }
  
  componentDidMount() {
    // this.initViews();
  }
  snack_open=()=>{
    this.setState({
      snack:true,
      info:this.state.info1
    })
    setTimeout(()=>{this.setState({snack: false})}, 10000)

  }
  snack_close=()=>{
    this.setState({
      snack:false
    })
  }
  snack_changeText=()=>{
    this.setState({
      info:this.state.info2
    })
  }
initViews=()=>{
  let list_items=[]
  return this.state.data.map((item)=>{
    // console.log(item.goal)
    return (  
      <Card style={styles.appCard1}>
      <Card.Content> 
        <Grid>
            <Row>
            <Col size={7}>
            <Text style={{color:"black"}}>
              {item.goal}
            </Text>
            <Text style={{color:"black"}}>
              {item.amount}
            </Text>
            </Col>
           <Col size={5}>
           <View mode="contained"style={{ backgroundColor:"#03e16f",
     borderRadius:20,marginRight:22,
     }}
                       >
                            <Text style={{fontSize:14,color:"#fff",textAlign:"center",padding:7}}>Finish Goal</Text>
                          </View></Col>
            <Col size={1}>
            <View style={styles.verticleLine}></View>
            </Col>
            <Col size={1}>
            <Icon name="right" size={30} color="#000" />
            </Col>
          </Row>
        </Grid>
        
        </Card.Content>
        </Card>
    );
  })
// this.setState({
//   item_views:list_items
// })
// console.log(this.state.item_views)
// return (list_items)

}

  render() {
  return (
    <View style={styles.container}>
          {/* <Appbar.Header>
        <Appbar.BackAction  color="#fff" />
        <Appbar.Content title="Sign up" color="#fff" />
      </Appbar.Header> */}
        
     <Paragraph style={styles.header1}>
        Afternoon  <Text style={{fontWeight:"bold"}}>JO</Text>
      </Paragraph>
     <Text style={styles.header2}>
        Here's the latest
      </Text>
     <Text style={styles.header3}>
        KES 42,000
      </Text>
     <Text style={styles.header4}>
        Tatal funds
      </Text>
      {this.state.snack ? 
       <View style={{ position: 'absolute', top: 12, left: 12, right: 12, bottom: 0
       ,backgroundColor:"red",height:"13%",borderRadius:7,}}>
               
          <Grid>
                <Row>
              
                <Col size={7}>
                <TouchableOpacity
          onPress={() => {
            this.snack_changeText();
          }}>
                <Text style={{color:"white",fontSize:16,padding:17}}>
                  {this.state.info}
                </Text>
                
</TouchableOpacity>
                </Col>

                <Col size={1}>
                  
<TouchableOpacity
style={{marginTop:"auto",marginBottom:"auto"}}
          onPress={() => {
            this.snack_close();
          }}>
                <Icon name="close" style={{marginTop:"auto",marginBottom:"auto"}} size={30} color="#fff" />
                </TouchableOpacity>
                </Col>
               
              </Row>
            </Grid>
          </View> :
          (<></>)
      }
     
      {/* <Card style={styles.appCard1}  style={{
        position: 'absolute', top: 12, left: 12, right: 12, bottom: 0, justifyContent: 'center', alignItems: 'center'
   ,backgroundColor:"red",height:"15%",borderRadius:7,
  }}>

</Card> */}
      <Card style={styles.appCard}>
          <Card.Content>  
          <Text style={styles.paragraph}>
       Your Goals</Text>
       {/* {this.state.item_views} */}
       
   
       <ScrollView style={styles.scrollView}  persistentScrollbar={true}>
       <List.Section >  
           {this.initViews()}  
            </List.Section>
                                
  
            </ScrollView>
            <Button mode="contained"style={{ marginTop: 30,marginBottom: 30,width: "90%",marginLeft:"auto",marginRight:"auto", backgroundColor:"#03e16f",
     padding:10,borderRadius:20,
     }}
                       onPress={() => this.snack_open()}
                       >
                      {/* onPress={() =>this.tuma()}> */}
                        {/* onPress={this.tuma()}> */}
                            <Text>Show snackbar</Text>
                          </Button>
        {/* <AssetExample /> */}
       </Card.Content>
      </Card>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#4a5d80',
    paddingTop:44,
    padding: 0,
  },
  header1:{
    color:"white",
    paddingTop:22,
    // marginTop:53,
    paddingLeft:22,
    fontSize:22,
  },
  header2:{
    color:"white",
    marginTop:8,
    paddingLeft:22,
    // fontSize:22,
  },
  header3:{
    color:"#03e16f",
    marginTop:20,
    paddingLeft:22,
    fontSize:32,
  },
  header4:{
    color:"white",
    marginTop:8,
    paddingLeft:22,
    paddingBottom:22,
    // fontSize:22,
  },
  appCard1:{
    // borderWidth: 1,
    // borderColor: "#999",
    hadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 4,
    borderRadius: 7,
    marginBottom: 10,
  },
  appCard: {
    marginBottom: 0,
    height:"80%",
    width:"100%",
    borderRadius:20,

},
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color:"#000"
  },
  
  scrollView: {
    padding: 15,
    backgroundColor: '#efefef',
    marginHorizontal: 2,
    height:"50%"
    
  },
  verticleLine: {
    height: '100%',
    // marginTop:"-52%",
    // marginBottom:"-52%",

    
  
    width: 1,
    backgroundColor: '#909090',
  },
});


export default (Home);
