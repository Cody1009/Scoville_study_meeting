import { connect } from "react-redux";
import AddTodo from "../../component/addTodo/AddTodo";

import { addTodo } from "../../store/actions/todos";

//今回はstateから何かを表示することはないのでdispatchだけ

const mapDispatchToProps = dispatch => {
  return {
    //  左のaddTodoHandlerが this.props.addTodoで呼び出される
    //   右のaddTodo にinput valueを入れるために引数を取る
    addTodoHandler: contentInput => dispatch(addTodo(contentInput))
  };
};

export default connect(
  // state propsがないときはnullを入れる
  null,
  mapDispatchToProps
)(AddTodo);
