import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Toolbar from '../components/Toolbar';
import TodoList from '../components/ToDoList';
import Todo from '../components/Todo';
import StringConstant from '../comman/StringConstant';

export default function ToDoListScreen() {
  const [title, setTitle] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [temptodos, setTempTodos] = useState([]);

  // Add todo item
  const addTodo = (title) => {
    if (title.length > 0) {
      setTitle('');
      if (title.length < 30) {
        setTodos([...todos, {key: Date.now(), name: title}]);
        setTitle('');
      } else {
        ToastAndroid.show(StringConstant.ERROR_MSG, ToastAndroid.SHORT);
      }
    }
  };

  // reset search item
  const resetList = () => {
    setSearchTitle('');
    console.log('' + JSON.stringify(todos));
    setTodos(temptodos);
  };

  // sort by Name
  const sortByName = () => {
    let todosTemp = [...todos];
    todosTemp.sort((a, b) => a.name.localeCompare(b.name));
    setTodos([...todosTemp]);
  };

  // sort by time
  const sortByTime = () => {
    let todosTemp = [...todos];
    todosTemp.sort((a, b) => a.key > b.key);
    setTodos([...todosTemp]);
  };

  // delete to do item
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.key !== id;
      }),
    );
  };

  // refresh the todo list when any item added
  useEffect(() => {}, [todos]);

  return (
    <View style={styles.container}>
      <Toolbar />

      <View style={styles.todo}>
        <Todo onSave={addTodo} />
        {/* <TextInput
          placeholder={StringConstant.PLACEHOLER_TEXT}
          value={title}
          onChangeText={(value) => setTitle(value)}
          style={styles.textbox}
        />
        <Button
          title={StringConstant.BUTTON_TEXT}
          color="#83B7B3"
          onPress={() => addTodo()}
        /> */}
      </View>

      <View style={styles.todo}>
        <TextInput
          placeholder={StringConstant.SEARCH_TEXT}
          value={searchTitle}
          onChangeText={(value) => {
            setSearchTitle(value);
            let text = value.toLowerCase();
            let todosTemp = [...todos];
            setTempTodos(todosTemp);
            let filteredName = todosTemp.filter((item) => {
              return item.name.toLowerCase().match(text);
            });
            if (text.length == 0) {
              setTodos(temptodos);
            } else if (!Array.isArray(filteredName) && !filteredName.length) {
              setTodos([]);
            } else if (Array.isArray(filteredName)) {
              setTodos([...filteredName]);
            } else if (Array.isArray(filteredName)) {
              setTodos([...filteredName]);
            } else {
            }
            // alert(filteredName.length)
          }}
          style={styles.textbox}
        />
        <Button
          title={StringConstant.BUTTON_SEARCH}
          color="#83B7B3"
          onPress={() => resetList()}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <View styles={{flex: 1, marginEnd: 10, justifyContent: 'center'}}>
          <Button
            title={StringConstant.SORT_NAME}
            color="#83B7B3"
            onPress={() => sortByName()}
          />
        </View>
        <View styles={{flex: 1, marginStart: 50}}>
          <Button
            title={StringConstant.SORT_TIME}
            color="#83B7B3"
            onPress={() => sortByTime()}
          />
        </View>
      </View>

      {todos.length > 0 ? (
        <ScrollView>
          {todos.map((todo) => (
            <TodoList key={todo.key} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.heading}>{StringConstant.NO_RECORD_FOUND}</Text>
      )}
    </View>
  );
}

// style sheet todo list
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#83B7B3',
    color: '#fff',
    width: '100%',
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
    width: '77%',
  },
  heading: {
    color: 'red',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignContent: 'center',
    marginTop: 150,
  },
});
