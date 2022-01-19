import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Listform.css';



function ListForm(props) {
     
    const [todo,setTodo]= useState(
        {
            task:"",
            id:"",
            status:false
        }
    );
function inputChangeHandler(e){
    setTodo({...todo, task: e.target.value});
};
const formSubmitHandler=(e)=>{
    e.preventDefault();
    if(todo.task.trim()){
        props.add({...todo,id: uuidv4()});
    }
    setTodo({...todo,task:""})

};
    return (
        <div className='form-cont'>
            <form onSubmit={formSubmitHandler}>
                <input value={todo.task} type='text' onChange={inputChangeHandler} className='input-box'/>
                <button type='submit' className='add-btn'><i class="fas fa-plus"></i>   </button>
            </form>
            
        </div>
    )
}

export default ListForm;
