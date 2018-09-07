//stateの初期化
const initialState = {
  //  countTodo は actionに移動
  todos: []
};

//state = initialStateで初期化してる
export const todoReducer = (state = initialState, action) => {
  //actionのtype 'ADD_TODO' などで条件分岐　switchを使う
  switch (action.type) {
    case "ADD_TODO":
      //  { id: countTodo + 1, todoTitle: todoTitle } が入ってる
      const todo = { ...action.payload };

      //stateのコピーにtodoを追加
      //  state ={
      // todos: [
      // { id:1, title: 'test'}
      // ]}
      return { todos: [...state.todos, todo] };

    default:
      return state;
  }
};
