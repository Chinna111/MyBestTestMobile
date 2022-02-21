import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import RNPickerDialog from './picker/new';
import RNPickerDialog from 'rn-modal-picker';

import MainDropDown from './components/MainDropDown';

const data = [
    {
        id: 1,
        name: 'Afghanistan',
    },
    {
        id: 2,
        name: 'Bahrain',
    },
    {
        id: 3,
        name: 'Canada',
    },
    {
        id: 4,
        name: 'Denmark',
    },
    {
        id: 5,
        name: 'Egypt',
    },
    {
        id: 6,
        name: 'France',
    },
    {
        id: 7,
        name: 'Greece',
    },

]

const data2 = [
    {
        id: 11,
        name: 'Afghanistan',
    },
    {
        id: 12,
        name: 'Bahrain',
    },
    {
        id: 13,
        name: 'Canada',
    },
    {
        id: 14,
        name: 'Denmark',
    },
    {
        id: 15,
        name: 'Egypt',
    },
    {
        id: 16,
        name: 'France',
    },
    {
        id: 17,
        name: 'Greece',
    },

]

const Home = () => {

    const [selectedText, setSelectedText] = useState();
    const [selectedText2, setSelectedText2] = useState();
    const placeHolderText = 'Please Select Country';

    //First dropdown
    const selectedValue = (index, item) => {
        console.log('item', item)
        setSelectedText(item.name)

    }

    //Second
    const selectedValue2 = (index, item) => {
        console.log('item', item)
        setSelectedText2(item.name)

    }

    return (
        <View>
            <MainDropDown
                data={data}
                selectedText={selectedText}
                placeHolderText={placeHolderText}
                selectedValue={(index, item) => selectedValue(index, item)}
            />


            <MainDropDown
                data={data2}
                selectedText={selectedText2}
                placeHolderText={placeHolderText}
                selectedValue={(index, item) => selectedValue2(index, item)}
            />



        </View>
    )
}



export default Home;