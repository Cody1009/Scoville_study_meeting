import React, { Component } from "react";
import "./TodoList.css"


import Todo from "../todo/Todo.js"

//命名規則としてコンポーネントは大文字から始まる
class TodoList extends Component {
  // stateはここでは使わないのでsuperなどは不要
  render() {
    // App.jsからもらったtodo は配列に入っているのでmapを使って, 一覧表示できる
    //todos: [
    //                 {
    //                     id: 1,
    //                     title: "Hello, React!"
    //                 },
    //                 {
    //                     id: 2,
    //                     title: "Hello, Redux!"
    //                 }
    //             ]

    const todos = this.props.todos.map(todo => (
      // keyがないとどのコンポーネントが変化したのかreactに伝えられないので必須
      // ...は配列やオブジェクトをコピーして中身を渡せる
      <Todo key={todo.id} {...todo} />
    ));

    return (
      <div className="list">
        {/*変数をjsx内で使うには{}でくくる*/}
        <ul>{todos}</ul>
      </div>
    );
  }
}

//他のコンポーネントで使用するためにexportする
export default TodoList;
