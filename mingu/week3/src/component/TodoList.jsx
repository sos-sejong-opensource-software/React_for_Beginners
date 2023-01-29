import TodoItem from './TodoItem';
import { AppContext } from '../App';
import { useContext } from 'react';
export default function TodoList(props) {
    const items = useContext(AppContext);
    
    return (
        <div>
            {items.map(it => <TodoItem key={it.id} item={it} deleteTodoList={props.deleteTodoList} editTodoList={props.editTodoList}/> )}
        </div>
    );
}

TodoList.defaultProps = {
    dummyData: [
        {
            id: 0,
            name: "Default",
            todo: "Default",
        }
    ]
}

