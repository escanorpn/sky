import  React, { Component } from 'react';
import {ScrollView, Text, View, StyleSheet,TouchableOpacity,Animated} from 'react-native';

import { Card,Button,List, Paragraph } from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';
import { Col, Row, Grid } from "react-native-easy-grid";

  
class Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
       item_views: [],
       animation: new Animated.Value(0),
       info:"This is an in-app notification snackbar to show to the user when they perform an action.Clicking it should change the text.",
       info1:"This is an in-app notification snackbar to show to the user when they perform an action.Clicking it should change the text.",
       info2:"User clicked snackbar",
       snack:true,
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
    this.animate_snack()
    setTimeout(()=>{
      // this.setState({snack: false})
      
    this.animate_snack1()
      
    }, 10000)

  }
  snack_close=()=>{
    this.animate_snack1()
    this.setState({
      // snack:false
    })
    
  }
  snack_changeText=()=>{
    this.setState({
      info:this.state.info2
    })
  }

  
  animate_snack=()=>{
    Animated.timing(this.state.animation, {
      toValue: 120,
      duration: 1000,
    }).start();
  }
  
  animate_snack1=()=>{
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 1000,
    }).start();
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
           <Col size={7}>
           <View mode="contained"style={{ backgroundColor:"#03e16f",
     borderRadius:20,marginRight:22,
     }}
                       >
                            <Text style={{fontSize:14,color:"#fff",textAlign:"center",padding:7}}>Finish Goal</Text>
                          </View></Col>
            <Col size={1}>
            <View style={styles.verticleLine}></View>
            </Col>
            <Col size={2}>
            <Icon name="right" size={30} color="#000" />
            </Col>
          </Row>
        </Grid>
        
        </Card.Content>
        </Card>
    );
  })


}

  render() {
    const boxStyle = {
      height: this.state.animation,
    };
  return (
    <View style={styles.container}>
        
        {this.state.snack ? 
        <View  >
          <Animated.View style={[styles.box, boxStyle]}>
          <Grid style={{ zIndex: 3}} >
                <Row style={{ zIndex: 3}}>
              
                <Col size={7} style={{ zIndex: 3}}>
                <TouchableOpacity
                style={{ zIndex: 4}}
          onPress={() => {
            this.snack_changeText();
          }}>
                <Paragraph style={{color:"white",fontSize:16,padding:17, zIndex: 3}}>
                  {this.state.info} 
                </Paragraph>
                
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
          </Animated.View>
        </View> :
          (<></>)}
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
      
    
      <Card style={styles.appCard}>
          <Card.Content>  
          <Text style={styles.paragraph}>
       Your Goals</Text>
       
   
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
                            <Text>Show snackbar</Text>
                          </Button>
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
    backgroundColor: '#4a5d80',
    paddingTop:44,
    padding: 0,
  },
  box: {
    position: 'absolute', top: 12, left: 12, right: 12, bottom: 0
       ,backgroundColor:"red",height:1,borderRadius:7, zIndex: 2,
      //  width:1

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
    backgroundColor:"#f8f9ff"

},
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color:"#000"
  },
  
  scrollView: {
    padding: 5,
    backgroundColor: '#f8f9ff',
    // marginHorizontal: 2,
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
