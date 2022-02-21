

import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import NetInfo from "@react-native-community/netinfo";


const NetInfotest = () => {

    useEffect(() => {
        console.log('UseEffect called');
        //unsubscribe();

        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
        });
    })


    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });

    return (
        <View>
            <Text>Hello world</Text>
            <Button title="Ok" />
        </View>
    )
}

export default NetInfotest;