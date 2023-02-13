import React, { useReducer } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import Title from './components/Title';
import {useState} from "react";
import Card from './components/Card';
import Homepage from './components/Homepage';


const initialState={
  
};
const reducer=(state,action)=>{

}



export const userContext = React.createContext();

function App() {
  const[state, dispatch] = useReducer(reducer, initialState)
  const [todo,setTodo] = useState([]);
  const [title, setTitle] = useState();
  const [des, setDes] = useState();
  const [selectedButton,setSelectedButton] = useState([]);

  const todohandler=()=>{
    const todos={title,description:des, tags:selectedButton}
    setTodo([...todo, todos])
    
  }
console.log(todo);
// return<>
// <Homepage/>
// </>
// return <>
// <Card/>
// </>
  return (
    <userContext.Provider value={{...state,dispatch }}>
    <div className="container">
      
      <div className='app-wrapper'>
      <Navbar setTodo={todohandler}/>
      <Title title={title}
      setTitle={setTitle}
      des={des}
      setDes={setDes}
      />
      <Buttons
      selectedButton={selectedButton}
      setSelectedButton={setSelectedButton}
      />
      
      </div>
    
      
    </div>
    </userContext.Provider>
  );
}

export default App;
