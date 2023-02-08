import React,{useState, useEffect} from "react";
import './App.css';
import Forms from "./components/Forms";
import Header from "./components/Header";
import Todolist from "./components/Todolist";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const[input,setInput] = useState("")


  const[todos,setTodos] = useState(initialState)


  const[edittodos,setEditTodos] = useState(null)

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <div className = "container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Forms
          input = {input}
          setInput = {setInput}
          todos={todos}
          setTodos ={setTodos}
          edittodos={edittodos}
          setEditTodos={setEditTodos}
          />
          
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} setEditTodos={setEditTodos}
          />
        </div>
      </div>
    </div>
    
  );
}

export default App;
