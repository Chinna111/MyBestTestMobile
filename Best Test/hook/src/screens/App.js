import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

import FirstScreen from './firstScreen';
import TestContext from './AppUseContext';


export default App = () => {

    return(

        <TestContext>
            <FirstScreen/>
        </TestContext>
    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

