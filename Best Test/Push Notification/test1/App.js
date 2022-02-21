import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, StyleSheet} from 'react-native';

import PushNotification from 'react-native-push-notification';


import Home from './src/Home';

const App =()=> {
  const [name, setName] = useState();

  useEffect(() => {

    createChannels();
    //createChannel()
  })

 /*  const createChannel = () => {
    console.log('Craete channel called')
    PushNotification.createChannel({
      channelId: "test-channel",
      channelName: 'Hello channel name'
    })
  } */

  const createChannels = () => {
    console.log('Create channel called----')
    PushNotification.createChannel(
      {
        channelId: "test-channel",
        channelName: "Test Channel"
      }
    )
  }

  const sendNotification = ()=> {
    console.log('send notification called');

    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Your notification',
      mesage: 'this is your message'
    })

    console.log('finished')
  }

  /* const goHome =()=> {

    console.log('goHome clalled')
    return <Home />
  } */

  return (

    <View style={styles.container}>
     {/*  <Text>Hello</Text>

      <TextInput placeholder="Type here.." style={styles.input}
        onChangeText={(text)=> setName(text)}
      ></TextInput>

      <Text>{name}</Text>

      <Button title="Send notification" onPress={()=> sendNotification()} /> */}

      <Home />

     {/*  <Button title="GoHome" onPress ={()=> goHome()}/> */}

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
    
  },
  input: {
    borderWidth: 1,
    width: 200,
    color: 'green',
    borderColor:'green',
    textAlign:'center'
  }
})
export default App;