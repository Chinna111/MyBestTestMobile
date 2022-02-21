import React, {useEffect} from 'react';

import {View, Text, Button} from 'react-native';

import PushNotification from 'react-native-push-notification';


const Home =()=> {

    useEffect(() => {
        console.log('Home called');
    })

   

    const handleNotification = () => {

        PushNotification.cancelAllLocalNotifications();

        PushNotification.localNotification({
            channelId: "test-channel",
            title: "You clicked on ",
            message: "your message",
            bigText: " is one of the largest and most beatiful cities in " ,
            color: "red",
            //id: 1
        });

        /* PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title: "Alarm",
            message: "You clicked on 20 seconds ago",
            date: new Date(Date.now() + 20 * 1000),
            allowWhileIdle: true,
        }); */
    }

    return (
        <View>
            <Text>Hello world</Text>

            <Button title="Send notification" onPress={() => handleNotification()} />
        </View>
    )


}

export default Home;