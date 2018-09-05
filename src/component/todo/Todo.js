import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <li className="todoItem">
        <p className="todoId">{this.props.id}</p>
        <p className="todoTitle">：{this.props.title}</p>
      </li>
    );
  }
}

export default Todo;
