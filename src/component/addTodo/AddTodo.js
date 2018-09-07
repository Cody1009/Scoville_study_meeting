import React, { Component } from "react";
import "./AddTodo.css";

class AddTodo extends Component {
  // inputのvalueはstateで管理する。ここのstateはstoreでは管理していないlocal state
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  //constructorの外に書くこと
  handleChange = event => {
    // inputのvalueが変わったらstateにそれを反映する
    const contentInput = event.target.value;
    this.setState({ content: contentInput });
  };

  handleSubmit = event => {
    event.preventDefault();
    // mapDispatchToProps で定義した関数をここでもってくる
    this.props.addTodoHandler(this.state.content);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div className="form">
        {/*App.jsからボタンを押したときの処理用の関数をpropsで受けとる*/}
        <form onSubmit={this.handleSubmit}>
          <input
            className="todoInput"
            name="title"
            type="text"
            placeholder="タイトル"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button className="btn" type="submit">
            追加
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
