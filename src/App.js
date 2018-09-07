import React, { Component } from "react";
import "./App.css";

// どちらもすでにstateとつながったcontainerなのでApp.jsから何もpropsで渡さなくていい
import TodoList from "./containers/todoList/TodoList";
import AddTodo from "./containers/addTodo/AddTodo";

class App extends Component {
  // state管理はreducerでやるのでここにあったstateは消す
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
