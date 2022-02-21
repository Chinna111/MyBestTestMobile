import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import DropDown from './components/DropDown';

const Data = [
    { label: 'One', value: 'One' },
    { label: 'Two', value: 'Two' },
    { label: 'Three', value: 'Three' }
]

const Data2 = [
    { label: 'Football', value: 'football' },
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
]

const SingleToMultiDdown = () => {

    const [value, setValue] = useState();
    const [value2, setValue2] = useState();

    const getPickValue = (value) => {

        console.log('Value1111', value);
        setValue(value)
    }

    const getPickValue2 = (value2) => {

        console.log('Value22', value2);
        setValue2(value2)
    }

    return (
        <View>
            <Text>Hello world</Text>


            <DropDown
                items={Data}
                placeholder={{ label: 'Choose value' }}
                onValueChange={(value) => getPickValue(value)}
                value={value}
            />


            <DropDown
                items={Data2}
                placeholder={{ label: 'Choose value2' }}
                onValueChange={(value2) => getPickValue2(value2)}
                value={value2}
            />



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

export default SingleToMultiDdown;