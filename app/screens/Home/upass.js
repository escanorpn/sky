import React, { useEffect, useState } from "react";
import { View, Image, ImageBackground, Alert } from "react-native";
import { Card,Button, Paragraph, TextInput } from "react-native-paper";
import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
import { connect } from "react-redux";

import styles from "./index.styles";

import { FetchingLoader as Fetching, Error } from "../../shared/Fetching";
import { NO_AUTH_GRAPHQL_URL,END_POINT,ELI_ENDPOINT } from "../../app.config";
import { navigateToCorrectAccount } from "../../shared/utils";
import { PHONE_ONBOARDING } from "../../graphql/queries"
import axios from "axios"
import bg from "../../assets/images/bg.png";
import * as AuthActions from "../../flux/auth/actions";
import MyLoc from "../MyLoc";
import b from '../B';
import store from '../../mRedux'
import mStore from 'react-native-simple-store';

import * as Animatable from 'react-native-animatable';
const client = new ApolloClient({
  uri: NO_AUTH_GRAPHQL_URL,
  cache: new InMemoryCache()
});

function PhoneOnboarding(props) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [username, setUname] = useState("")
  const [password, setPassword] = useState("")
  const [ld, setld] = useState(false)

  useEffect(() => {

    // mStore.update('album', {
    //   albumName: 'Blurry Face',
    // })
    // mStore.update('user', {
    //   uid:3,
    // })
    // console.log("4")
  
  //   mStore.get('user')
  // .then((res) =>
  // console.log(res) 
  // )

    const { auth } = props;
    const { user, isAuthenticated } = auth;
   console.log("4"+JSON.stringify(user))
    if (user && isAuthenticated) {
      if (user && user.accountStatus) {
        // navigateToCorrectAccount(props, user);
      }
    }
  }, []) //notice the empty array here



function logIn(){
  setld(true)
  console.log("Login_in")

  let murl=ELI_ENDPOINT+"sessions";
//  var murl="https://odatimms.herokuapp.com/api/v1/phone_users";


      let    mData = { 
        username:`${username}`,
        password:`${password}`,   
      };

    if(username==""){
      alert("Enter your Username")
      setld(false)
      return
    }else if(password==""){
      alert("Enter your password")
      setld(false)
      return
    }
      console.log(ELI_ENDPOINT);
      console.log("mData= "+ JSON.stringify(mData));

     axios({
         method: 'POST',
         url: murl,
         data: mData,
         config: { headers: {'Content-Type': 'multipart/form-data' }}
     })
     .then((response) => {
   
        const results = response.data
   
      //  console.log("response: "+JSON.stringify(response));
      
       console.log("Response2: "+ JSON.stringify(results.user));
       const { dispatch } = props;

   
       mStore.update('results', {
        results:{results},
        }).then((res) =>{
          console.log(results)

          // console.log("signing up")

          if(results.status==2){
            const { auth } = props;
            let vStatus=results.user.verification_status;
       
            // console.log("new user")
            b.abc();
            dispatch(
              AuthActions.addAuthenticatedUser({
                user: results.user,
                isAuthenticated: true,
              }));
               mStore.update('sCode_auth', {
                 sCode_auth:2,
                 }).then((res) =>{
                  if(results.user.role=="Supervisor"){

                    props.navigation.navigate("Homes")
                  }else if(vStatus=="Verified"){
                     props.navigation.navigate("Home")
                     }else{
                     props.navigation.navigate("Home1")
                     }
                 
                 })
            }else if(results.status==3){
              alert("Username or password invalid")
            // console.log(" Details exist")
              setld(false)
            }
    
        })

     })

     .catch(function (e) {
      setld(false)
      
        alert(e)
         console.log("error"+e)
     });
       // alert("test");
   }



  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Fetching visible={ld} />
      
        <Card style={styles.appCard}>
              <Card.Content     style={{marginTop:33,}}>

        {/* <Card style={styles.appCard}>
              <Card.Content     style={{marginTop:33,}}>

              </Card.Content>
              </Card> */}
            <View
              style={{
                width: "100%",
                padding: 10,
                marginTop:33,
              }}
            >
            <Card style={styles.appCard}>
              <Card.Content>
              <Paragraph
                style={{
                  color: "#9e9e9e",
                  paddingBottom: 10,
                }}
              >
                What should we call you
                </Paragraph>
              <View>
                <TextInput
                  placeholder="User Name"
                  // value={phoneNumber}
                  style={styles.input}
                  // mode="outlined"
                  maxLength={13}
                  keyboardType={"default"}
                  onChangeText={(t) =>
                    setUname(t)
                  }
                />
              </View>

              </Card.Content>
              </Card>
        
              <Card style={styles.appCard}>
              <Card.Content>
              <Paragraph
                style={{
                  color: "#9e9e9e",
                  paddingBottom: 10,
                }}
              >
               Enter your password
                </Paragraph>
              <View>
              <TextInput style={styles.input}
           placeholder="Password"
          //  placeholderTextColor="#9a73ef"
           returnKeyType='go'
           secureTextEntry
           autoCorrect={false}
           onChangeText={(t) =>
            setPassword(t)
          }
/>
              </View>

              </Card.Content>
              </Card>

              <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', marginTop:30}}>            
                <Button
                  style={styles.btn}
                  block={true}
                        onPress={logIn}>
                  <Paragraph style={{ color: "#fff" }}>Submit</Paragraph>
                </Button>
              </Animatable.Text>
 
          
            </View>
            </Card.Content>
              </Card>
      
      </View>
    </View>
  );
}

export default connect((state) => state)(PhoneOnboarding);
