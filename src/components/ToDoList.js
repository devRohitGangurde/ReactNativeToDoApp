import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

// custom toolbar with title
export default function TodoList(props) {
  return (
    <View style={styles.listTile}>
      <View style={{flex: 1, flexDirection: 'column',marginStart:5}}>
        <Text style={styles.title}>{"Name : "+props.todo.name}</Text>
        <Text style={styles.date}>{new Date(props.todo.key).toTimeString()}</Text>
      </View>

      <TouchableHighlight onPress={() => props.deleteTodo(props.todo.key)}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../assets/images/icon_delete.png')}
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#CCB9AC',
    padding: 10,
    borderRadius: 5,
    marginStart: 10,
    marginTop: 10,
  },
  title: {
    width: '60%',
    fontSize: 18,
    marginTop:5
  },
  date: {
    width: '85%',
    fontSize: 18,
    marginTop:5
  },
});
