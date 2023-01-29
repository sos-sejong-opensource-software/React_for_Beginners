import React, {useRef, useState, createContext, useEffect, useReducer } from 'react';
import TodoList from './component/TodoList';
import Btn from './component/Btn';
import AddTodo from './component/AddTodo';
import './App.css';

export const AppContext = createContext();

const dummyData = [
  {
      id: 0,
      name: "민구",
      todo: "운전면허학원 등록하기",
  },
];

// const reducer = (state, action) => {
//   switch(action.type) {
//     case "CREATE": {
//       const newItem = {
//         ...action.data,
//       }
//       return [...state, newItem];
//     }

//     default: return state;
//   }

// }

function App() {

  const [todoData, setTodoData] = useState(dummyData);
  const [addStatus, setAddStatus] = useState(false);
  // const [todoListData, dispatchTodoListData] = useReducer(reducer, []);
  const dummyDataRef = useRef(0);

  const addDummyData = (nameInfo, todoInfo) => {
    const newTodo = {
      id: dummyDataRef.current + 1,
      name: nameInfo,
      todo: todoInfo,
    }
    dummyDataRef.current += 1;
    setTodoData(todoData => [...todoData, newTodo]);


    // dispatchTodoListData({
    //   type: "CREATE",
    //   data: {
    //     id: dummyDataRef.current + 1,
    //     name: nameInfo,
    //     todo: todoInfo,
    //   }
    // });
  }

  const deleteTodoList = (deleteId) => {
    setTodoData((todoData) => todoData.filter(el => el.id !== deleteId));
  }

  const editTodoList = (editContent) => {
    console.log(editContent);
    setTodoData(todoData => todoData.map((it) => it.id === editContent.id ? {...it, name: editContent.name, todo: editContent.todo} : it));

  }

  const addBtnClicked = () => {
    setAddStatus(!addStatus);
  }

  return (
    <AppContext.Provider value={todoData}>
      <div className="appContainer">
        {addStatus ? <AddTodo addDummyData={addDummyData} addBtnClicked={addBtnClicked}/> : <Btn onClick={addBtnClicked} title="추가하기"/>}
        {todoData.length ? <TodoList dummyData={todoData} deleteTodoList={deleteTodoList} editTodoList={editTodoList}/> : <h1>Empty List</h1>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
