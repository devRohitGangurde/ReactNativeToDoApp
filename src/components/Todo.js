import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

export default function Todo({onSave}) {
  const [title, setTitle] = useState('');

  return (
    <View style={styles.todo}>
      <TextInput
        placeholder=" Enter todo item Text."
        value={title}
        onChangeText={(value) => setTitle(value)}
        style={styles.textbox}
      />
      <Button title="Add" color="#83B7B3" onPress={() => onSave(title)} />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginStart: 10,
    marginEnd: 10,
  },
  textbox: {
    borderWidth: 1,
    borderColor: '#83B7B3',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: '80%',
  },
});
