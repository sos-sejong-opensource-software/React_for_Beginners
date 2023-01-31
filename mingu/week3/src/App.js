import React, {useRef, useState, createContext, useEffect, useReducer } from 'react';
import TodoList from './component/TodoList';
import Btn from './component/Btn';
import AddTodo from './component/AddTodo';
import './App.css';
import { reverse } from 'lodash';

export const AppContext = createContext();
const date = new Date();
const dummyData = [
  {
      id: 0,
      name: "민구",
      todo: "운전면허학원 등록하기",
      enrollDate: "2023.1.18.12.12.12"
  },
];

function App() {

  const [todoData, setTodoData] = useState(dummyData);
  const [addStatus, setAddStatus] = useState(false);

  const dummyDataRef = useRef(0);

  const addDummyData = (nameInfo, todoInfo, dateInfo) => {
    const newTodo = {
      id: dummyDataRef.current + 1,
      name: nameInfo,
      todo: todoInfo,
      enrollDate: dateInfo,
    }
    dummyDataRef.current += 1;
    setTodoData(todoData => [...todoData, newTodo]);
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

  const onSortByRecentContent = () => {
    console.log("RECENT SORT");
    setTodoData(todoData => todoData.sort());
  }

  const onSortByOldContent = () => {
    console.log("onSortByOldContent");
    setTodoData(todoData => todoData.sort());
    setTodoData(todoData => todoData.reverse());
  }

  return (
    <AppContext.Provider value={todoData}>
      <div className="appContainer">
        {addStatus ? <AddTodo addDummyData={addDummyData} addBtnClicked={addBtnClicked}/> : <Btn onClick={addBtnClicked} title="추가하기"/>}
        {todoData.length ? <TodoList dummyData={todoData} deleteTodoList={deleteTodoList} editTodoList={editTodoList}/> : <h1>Empty List</h1>}
        {/* <Btn onClick={onSortByRecentContent} title="최신순 정렬"></Btn>
        <Btn onClick={onSortByOldContent} title="오래된순 정렬"></Btn>         */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
