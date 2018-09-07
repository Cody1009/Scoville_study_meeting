import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// reduxを使うために必要な下処理
import { Provider } from "react-redux";
import { createStore } from "redux";
import { todoReducer } from "./store/reducers/todos";

// storeはすべてのstateを中央管理するためのデータベースみたいなもの
// 使用するreducerと、dev toolと合わせてstoreをここで作成
const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // このtodo appのどこでもstoreにアクセスできるようにするための下処理
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
