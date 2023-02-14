import React, { useReducer } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import Title from './components/Title';
import { useState } from "react";
import Card from './components/Card';
import Homepage from './components/Homepage';



const initialState = {
  add: false,
  tags:  [
    {
      label: "work",
      id: 0
    },
    {
      label: "Study",
      id: 1
    }
    ,
    {
      label: "Environment",
      id: 2
    },
    {
      label: "Family",
      id: 3
    }
  ],
  selectedTags:[]
}

export const userContext = React.createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        add: true

      };
      case 'Editclose':
        return{
          ...state,
          editopen :false,
          setEdit : false

        };
      case "selectTag":
        return {
          ...state, selectedTags:[...state.selectedTags, action.data]
      };



  }

}





function App() {
  const [state, dispatch] = useReducer(reducer, initialState)




  const [todo, setTodo] = useState([]);

  const [title, setTitle] = useState();
  const [des, setDes] = useState();

  return <>
    <userContext.Provider value={{ ...state, dispatch }}>

      <Homepage />
      
      

    </userContext.Provider>
  </>
  // return <>
  // <Card/>
  // </>
  return (
    <userContext.Provider value={{ ...state, dispatch }}>
      <div className="container">

        <div className='app-wrapper'>
          <Navbar/>
          <Title title={title}
            setTitle={setTitle}
            des={des}
            setDes={setDes}
          />
          <Buttons/>

        </div>


      </div>
    </userContext.Provider>
  );
}

export default App;
