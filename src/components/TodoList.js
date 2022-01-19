import React from 'react'
import Todo from './Todo'
import './TodoList.css';

function TodoList(props) {
    return (
        <ul className='maincl'>
            {props.val.map(todo =>(
             <Todo key={todo.id} todo={todo} remove={props.remove} check={props.check} checkFalse={props.checkFalse}/>
            ))}
        </ul>
    )
}

export default TodoList
