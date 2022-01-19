import React from 'react'
import './Todo.css';

function Todo(props) {
    const handleRemove=()=>{
     props.remove(props.todo.id);
    };

    const handleCheck=(e)=>{
        if(e.target.checked){
     props.check(props.todo.id);
        }
        else{
            props.checkFalse(props.todo.id);
        }
    
    };
    const iswas =false;
    return (
        <div className={'main ' + (props.todo.status ? 'check-opaque' : '')}>
        <div className='list-cont'>
           
                <li className={'list ' + (props.todo.status ? 'line' : '')} >
                {props.todo.task}
            </li>
            </div>
          
            
            <div className='sec'>
            <button onClick={handleRemove} className='cancel-button'><i class="fas fa-window-close"></i></button>

            <input type="checkbox" onClick={handleCheck} {...(props.todo.status ? {defaultChecked: 'true'} : {})}className='check-button' />
            </div>
            </div>
    )
}

export default Todo
