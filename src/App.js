import React, { Component } from "react";
import "./App.css";

//他のコンポーネントを使うためにはimportする必要がある
import TodoList from "./component/todoList/TodoList";
import AddTodo from "./component/addTodo/AddTodo";

class App extends Component {
  constructor() {
    // Componentを継承してメソッドを使えるように
    super();
    // stateは基本的にApp.jsに置く

    //  空のstate
    const todoItems = [
        // {
        //     id:1,
        //     title: 'reactはじめました'
        // }
    ];

    this.state = {
      todos: todoItems,
      //  idを振るために必要
      todoCount: todoItems.length + 1
    };
  }

  handleSubmit = e => {
    // buttonを押したときにリロードさせない。 stateがリセットされてしまうから
    e.preventDefault();
    // AddTodoの name="title" のinputのvalueを入れる
    const input = e.target.title.value;

    // stateの配列をコピーして安全にstateを変える準備
    const todoItems = [...this.state.todos];
    const todoCount = this.state.todoCount;

    todoItems.push({
      id: todoCount,
      title: input
    });

    this.setState({ todos: todoItems });
    this.setState({ todoCount: todoCount + 1 });

    //stateに追加したあとinputの中身を初期化
    e.target.title.value = "";
  };

  render() {
    return (
      // class=""ではないことに注意
      <div className="App">
        <h1>Todo App</h1>
        <AddTodo handleSubmit={this.handleSubmit} />
        <TodoList
          // propsというattributeのようなものに上のtodosの中身を渡す
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
