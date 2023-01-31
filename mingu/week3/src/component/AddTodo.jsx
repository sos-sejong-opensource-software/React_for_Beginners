import { useReducer } from "react";
import styled from "styled-components";

const defaultAddTodo = {
    name: "",
    todo: "",
}

const addReducer = (state, action) => {
    switch(action.type) {
        case "NAME": {
            return {
                ...state,
                name: action.data,
            }
        }

        case "TODO": {
            return {
                ...state,
                todo: action.data,
            }
        }
        default: {
            return state;
        }
    }
}

export default function AddTodo(props) {
    const [addData, dispatchAddData] = useReducer(addReducer, defaultAddTodo);


    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        const date = new Date();
        const enrollDate = date.getFullYear().toString() + "." + (date.getMonth() + 1).toString() + "." + date.getDate().toString() + "." +date.getHours().toString() + "." + date.getMinutes().toString() + "." + date.getSeconds().toString(); 
        props.addDummyData(addData.name, addData.todo, enrollDate);
        props.addBtnClicked();
    }

    const onNameInputHandler = (e) => {
        dispatchAddData({
            type: "NAME",
            data: e.target.value,
        })
    }
    const onTodoInputHandler = (e) => {
        dispatchAddData({
            type: "TODO",
            data: e.target.value,
        })
    }


    return (
        <TodoFrom action="" onSubmit={onFormSubmitHandler}>
            <TodoLabel htmlFor="name">이름을 입력해주세요</TodoLabel>
            <TodoInput id="name" type="text" onChange={onNameInputHandler} value={addData.name} required/>
            <TodoLabel htmlFor="todo">오늘 할일을 입력해주세요</TodoLabel>
            <TodoInput id="todo" type="text" onChange={onTodoInputHandler} value={addData.todo} required/>
            <TodoBtn>오늘 할일 추가</TodoBtn>
        </TodoFrom>
    )
}

const TodoFrom = styled.form`
    display: flex;
    flex-direction: column;
`

const TodoLabel = styled.label`
    color: #dee2e6;
    font-size: 20px;
`
const TodoInput = styled.input`
    width: 100%;
    height: 50px;
    color: white;
    font-size: 25px;
    font-weight: bold;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid #6c757d;
`

const TodoBtn = styled.button`
    color: #dee2e6;
    font-size: 20px;
    width: 150px;
    background-color: transparent;
    border: 1px solid #6c757d;
`