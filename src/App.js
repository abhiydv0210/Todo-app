import React, { useReducer } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import Title from './components/Title';


import Homepage from './components/Homepage';



const initialState = {
  
  Open:false,
  Editclose:false,
  title:"",
  Editadd: false,
  selectTag:false,
  
  Todos :[],
  description:" ",
  optionedit:false,
  optiondelete:false,
  
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

export const userContext = React.createContext(initialState);


const reducer = (state, action) => {
  switch (action.type) {
    // case "add":
    //   return{
    //     ...state,
    //     add:true
    //   }
      
      // case 'Edit':
      //   return{
      //     ...state,
      //     Editclose:true,
      //     Editadd: true,
          
      //   };
        case 'Open':
          
        return{
          ...state,
          Open:true,
          
          Editadd: false,
          Editclose:false,
          selectTag:false,
          title:action.data,
          description:action.data,
          Title:'',
          description:''
          

          

          
          
        };
        case 'Todos':
        return{
          ...state,
          // Editclose: false,
          // Open: false,
          // Editadd: false,
          // selectTag:[tags.id],

          // Todos :[ ],
          Todos:[...state.Todos, {title:state.title,description:state.description}],
          // Todos:[]

          // title:action.data,
          // description:action.data,

          

        }
        
        case 'Editclose':
        return{
          ...state,
          Editclose: true,
          Open: false,
          Editadd: false,
          
          selectTag:false,
          title:action.data,
          description:action.data,
          
          
          
        };
        
        case 'Editadd':
          let todo = {
            title: state.title, 
            description: state.description, 
            tags: state.selectedTags
          }
        return{
          ...state,
          Editadd: true,
          Editclose: false,
          Open: false,
          selectTag:false,
          title:action.data,
          description:action.data,
          Todos:[...state.Todos, todo],
          title:"",
          description:"",
          selectedTags:[] 
        };
        case 'optionedit':
          return{
            ...state,
            optionedit:true,
            Editadd: false,
          Editclose:false,
          selectTag:false,
          title:action.data,
          description:action.data,
          
          

          };
          case 'optiondelete':
          return{
            ...state,
            optiondelete:true
          };
        
      case "selectTag":
        return {
          ...state, selectedTags:[...state.selectedTags, action.data]

      };
      case "title":
        return{
          ...state,
          title: action.data,
        };
      case "description":
        return{
          ...state,
          description : action.data,
        };
        
          
}}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  

  return <>
    <userContext.Provider value={{ ...state, dispatch }}>
      <Homepage state ={state} dispatch={dispatch}/>
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
          <Title 
          />
          <Buttons/>

        </div>


      </div>
    </userContext.Provider>
  );
}

export default App;
