// action typeのすべてをactionTypes.jsからimportしてくる。
import * as actionTypes from "./actionTypes";

let countTodo = 1;

export const addTodo = contentInput => {
  //返り値はただのオブジェクト
  return {
    // typeは必須。 payloadは処理によっては不要
    //  'ADD_TODO' がtypeに入っている
    type: actionTypes.ADD_TODO,

    //ここに todoの中身, inputにいれた文字列を入れる
    //id を1つずつ足していく
    payload: { id: countTodo++, title: contentInput }
  };
};
