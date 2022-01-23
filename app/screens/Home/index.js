import  React, { Component } from 'react';
import {ScrollView, Text, View, StyleSheet, } from 'react-native';
// import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card,Button,List } from 'react-native-paper';

import { Col, Row, Grid } from "react-native-easy-grid";
// export default function App() {
  
class Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
       item_views: [],
       data:[{goal:"Goal 1", amount:"12,000"},{goal:"Goal 2", amount:"12,000"}]
    };
  }
  
  componentDidMount() {
    // this.initViews();
  }

initViews=()=>{
  let list_items=[]
  return this.state.data.map((item)=>{
    console.log(item.goal)
    return (  
      <Card style={styles.appCard1}>
      <Card.Content> 
        <Grid>
            <Row>
            <Col size={3}>
            <Text style={{color:"black"}}>
              {item.goal}
            </Text>
            <Text style={{color:"black"}}>
              {item.amount}
            </Text>
            </Col>
           
            <Col size={1}>

            <View style={styles.verticleLine}></View>
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
     
     <Text style={styles.header1}>
        Afternoon JO
      </Text>
     <Text style={styles.header2}>
        Here's the latest
      </Text>
     <Text style={styles.header3}>
        KES 42,000
      </Text>
     <Text style={styles.header4}>
        Tatal funds
      </Text>
      <Card style={styles.appCard}>
          <Card.Content>  
          <Text style={styles.paragraph}>
       Your Goals</Text>
       {/* {this.state.item_views} */}
       
   
       <ScrollView style={styles.scrollView}  persistentScrollbar={true}>
       <List.Section >  
           {this.initViews()}  
            </List.Section>
                                
     <Button mode="contained"style={{ width: "4",marginTop: 30,marginBottom: 30,width: "50%",marginLeft:"auto",marginRight:"auto"}}
                       onPress={() => this.send_d()}
                       >
                      {/* onPress={() =>this.tuma()}> */}
                        {/* onPress={this.tuma()}> */}
                            Submit
                          </Button>
            </ScrollView>
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
    // backgroundColor: 'blue',
    padding: 0,
  },
  header1:{
    color:"white",
    marginTop:233,
    paddingLeft:22,
    fontSize:22,
  },
  header2:{
    color:"white",
    // marginTop:"20%",
    paddingLeft:22,
    // fontSize:22,
  },
  header3:{
    color:"green",
    marginTop:"5%",
    paddingLeft:22,
    fontSize:32,
  },
  header4:{
    color:"white",
    marginTop:"1%",
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
    marginBottom: 5,
    height:"100%",
    width:"100%",

},
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#000"
  },
  
  scrollView: {
    padding: 15,
    backgroundColor: '#efefef',
    marginHorizontal: 2,
    height:"70%"
    
  },
  verticleLine: {
    height: '100%',

    
  
    width: 1,
    backgroundColor: '#909090',
  },
});


export default (Home);