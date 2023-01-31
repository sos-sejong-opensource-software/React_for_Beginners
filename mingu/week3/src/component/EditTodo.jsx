import { useReducer, useState } from "react";
import styled from 'styled-components';

const editReducer = (state, action) => {
    switch(action.type) {
        case "EDIT_NAME": {
            return {
                ...state,
                editName: action.data,
            }
            
        }

        case "EDIT_TODO": {
            return {
                ...state,
                editTodo: action.data,
            }
        }

        default: return state;
    }
}

export default function EditTodo(props) {
    const editData = props.editUser;

    const [editContent, dispatchEditContent] = useReducer(editReducer, {editName: editData.name, editTodo: editData.todo});


    const onEditSubmitHandler = (e) => {
        e.preventDefault();
        const editContents = {
            id: editData.id,
            name: editContent.editName,
            todo: editContent.editTodo,
        }
        props.setIsEdit(!props.isEdit);
        props.editTodoList(editContents);

    }

    const onEditName = (e) => {
        dispatchEditContent({
            type: "EDIT_NAME",
            data: e.target.value,
        });
    }

    const onEditTodo = (e) => {
        dispatchEditContent({
            type: "EDIT_TODO",
            data: e.target.value
        });
    }


    return (
        <form onSubmit={onEditSubmitHandler}>
            <div>
            <label htmlFor="editName">이름</label>
            <EditInput id="editName" type="text" value={editContent.editName} onChange={onEditName}/>
            </div>
            <div>
            <label htmlFor="editTodo">내용</label>
            <EditInput id="editTodo" type="text" value={editContent.editTodo} onChange={onEditTodo}/>
            </div>
            <EditBtn>수정하기</EditBtn>
        </form>
    )
}

const EditForm = styled.form`
    display: flex;
    flex-direction: columns;
`

const EditInput = styled.input`
    width: auto;
    color: #dee2e6;
    background-color: #212529;
    font-size: 20px;
    margin: 10px 0px;
    margin-left: 10px;
    border: 1px solid #6c757d;
    border-radius: 10px;
    padding: 20px;
`

const EditBtn = styled.button`
    color: #dee2e6;
    background-color: #212529;
    font-size: 15px;
    margin: 10px 0px;
    border: 1px solid #6c757d;
    border-radius: 5px;
    padding: 7px;
`

