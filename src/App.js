import React, { Component } from "react";
import "./App.css";

//他のコンポーネントを使うためにはimportする必要がある
import TodoList from "./component/todoList/TodoList";

class App extends Component {
    constructor() {
        // Componentを継承してメソッドを使えるように
        super();
        // stateは基本的にApp.jsに置く
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Hello, React!"
                },
                {
                    id: 2,
                    title: "Hello, Redux!"
                }
            ]
        };
    }

    render() {
        return (
            // class=""ではないことに注意
            <div className="App">
                {/*いらないコード消す*/}
                <h1>Todo App</h1>
                <TodoList
                    // propsというattributeのようなものに上のtodosの中身を渡す
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default App;
