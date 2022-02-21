import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const DropDown = ({ items, onValueChange, placeholder, value, itemKey, key }) => {
    return (
        <View
            style={[styles.container, { padding: Platform.OS === 'ios' ? 10 : null }]}>
            <RNPickerSelect
                key={key}
                style={pickerSelectStyles}
                //onValueChange={value => console.log(value)}
                useNativeAndroidPickerStyle={true}
                placeholder={placeholder}
                onValueChange={onValueChange}
                value={value}
                itemKey={itemKey}
                items={items ? items : []}
                Icon={() => (
                    <View
                        style={[
                            { transform: [{ rotate: '90deg' }] },
                            { paddingTop: Platform.OS === 'android' ? 20 : null },
                        ]
                        }>
                        <MaterialIcons name="chevron-right" size={24} style={{ left: Platform.OS == 'android' ? 10 : 0 }} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#b2b2b2',
        marginVertical: 5,
        borderRadius: 5,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 13,
        paddingVertical: 5,
        paddingHorizontal: 10,
        //borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        //borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default DropDown;
