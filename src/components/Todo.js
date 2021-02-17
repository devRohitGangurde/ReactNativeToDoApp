import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Todo(props) {
  
  const [title, setTitle] = useState('');

  return (
    <View style={styles.todo}>
      <TextInput 
        placeholder=" ." 
        value={title}
        onChangeText={value=>setTitle(value)}
        style={styles.textbox} />
      <Button 
        title="Add" 
        color='#83B7B3'
        onPress={props.addTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#83B7B3",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width:'80%'
  }
});