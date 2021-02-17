import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StringConstant from '../comman/StringConstant'

// custom toolbar with title
export default function Toolbar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.heading}>{StringConstant.APP_NAME}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#83B7B3',
    color: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignContent: 'center',
  },
});
