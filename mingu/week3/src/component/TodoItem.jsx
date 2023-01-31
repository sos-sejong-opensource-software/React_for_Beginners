import {useState} from "react";
import styled from "styled-components";
import EditTodo from "./EditTodo";

export default function TodoItem(props) {
    const userData = props.item;
    const [isEdit, setIsEdit] = useState(false);
    const onDeleteHandler = () => {
        props.deleteTodoList(userData.id);
    }  

    const onEditHandler = () => {
        setIsEdit(!isEdit);
    }
    return (
        <ListContainer>
            {
                isEdit ? <EditTodo editUser={userData} editTodoList={props.editTodoList} setIsEdit={setIsEdit} isEdit={isEdit}/> : <ContentDiv>{userData.name}님의 목표는 {userData.todo} <PTag>등록일 {userData.enrollDate}</PTag></ContentDiv>
            }
            
            <ContentDiv>
                <ActionTag onClick={onDeleteHandler}>Delete</ActionTag>
                <ActionTag onClick={onEditHandler}>Edit</ActionTag>                                                        
            </ContentDiv>
        </ListContainer>
    )
}


const ListContainer = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #dee2e6;
    list-style-type: none;
    margin: 10px 0px;
    border: 1px solid #6c757d;
    border-radius: 10px;
    padding: 20px;
`

const ContentDiv = styled.div`
    font-size: 25px;
    font-weight: bold;
`
const ActionTag = styled.span`
    font-size: 15px;
    color: #ffd60a;
    margin: 0px 5px;
`

const PTag = styled.p`
    color: #adb5bd;
    font-size: 10px;
`