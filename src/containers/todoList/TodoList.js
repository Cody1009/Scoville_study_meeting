// ロジックをTodoListにつなぐために必要なものをインポート
import { connect } from "react-redux";

// 表示用のTodoListコンポーネントをimport
import TodoList from "../../component/todoList/TodoList";

// stateの中身
// const initialState = {
//     todos: []
// };

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
// TodoList はTodoにstateを渡して表示するだけなのでmapdispatchToPropsはいらない その場合は何も書かなくていい。
export default connect(
  mapStateToProps,
)(TodoList);
