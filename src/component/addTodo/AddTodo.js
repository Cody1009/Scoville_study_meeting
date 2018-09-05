import React, { Component } from 'react'
import './AddTodo.css'

class AddTodo extends Component {
    render() {
        return (
            <div className="form">
                {/*App.jsからボタンを押したときの処理用の関数をpropsで受けとる*/}
                <form onSubmit={this.props.handleSubmit}>
                    <input className="todoInput" name="title" type="text" placeholder="タイトル" />
                    <button className="btn" type="submit">追加</button>
                </form>
            </div>
        )
    }
}

export default AddTodo