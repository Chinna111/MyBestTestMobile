import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import TestContext from './AppUseContext';

const FirstScreen = () => {

    const blogPosts = useContext(TestContext);
    console.log('blogPosts', blogPosts)


    const TestBtn = ()=> {
        console.log('blogPosts-----', blogPosts)
    }

    return (

        <View style={{marginTop: 30}}>
            <Text>FirstScreen </Text>
            <Button title="test" onPress={()=> TestBtn()}/>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FirstScreen;