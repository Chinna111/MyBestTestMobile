// Imports: Dependencies
import React, { Component } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { useSelector, useDispatch } from 'react-redux';


// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Screen: Counter
const Counter = () => {

  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);
  console.log('counter---', counter)

  const reduxIncreaseCounter = () => {
    dispatch({ type: 'INCREASE_COUNTER', value: 1, })
  }

  const reduxDecreaseCounter = () => {
    dispatch({ type: 'DECREASE_COUNTER', value: 1, })
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterTitle}>Counter</Text>

      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={reduxIncreaseCounter}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>{counter}</Text>

        <TouchableOpacity onPress={reduxDecreaseCounter}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )

}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});



// Exports
export default Counter;