import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SecondScreen = ()=>{

    return(

        <View>
            <Text>Second Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SecondScreen;