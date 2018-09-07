import React, { Component } from "react";
import "./TodoList.css";

import Todo from "../todo/Todo.js";

class TodoList extends Component {
  render() {
    console.log(this.props, 'TodoListのpropsを確認');
    const todos = this.props.todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ));
    return (
      <div className="list">
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
