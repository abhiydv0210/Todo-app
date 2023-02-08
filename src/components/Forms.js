import React,{useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';

const Forms = ({input,setInput,todos,setTodos,edittodos, setEditTodos}) => {
    const updateTodo =(title, id , completed)=>{
        const newTodo = todos.map((todo)=>
        todo.id === id ?{title , id, completed} : todo
        
        );
        setTodos(newTodo)
        setEditTodos("");

    }
    useEffect(()=>{
        if (edittodos){
        setInput(edittodos.title)
        }else {
            setInput('')
        }
    },[setInput,edittodos])

    const onInputChange = (event)=>{
        setInput(event.target.value);
    };
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if (!edittodos){
        setTodos([...todos,{id: uuidv4(),  title: input, completed: false}])
        setInput('');
        }else{
            updateTodo(input, edittodos.id, edittodos.completed)
        }
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type = "text"
         placeholder="Enter a Todo..." 
          className='task-input'
          value={input}
          required
          onChange={onInputChange}
          
          />
        <button className = "button-add" type = "submit">{edittodos ? "OK" : "Add"}</button>
    </form>
  )
}

export default Forms
