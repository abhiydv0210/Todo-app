import React, { useReducer } from 'react';
import './App.css';
import Homepage from './components/Homepage';

const initialState = {
  Open:false,
  Editclose:false,
  title:"",
  Editadd: false,
  selectTag:false,
  updatebutton:false,
  Todos :[],
  description:"",
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
        case'updatebutton':
        let add ={
          ...state,
          title : state.title,
          description: state.description
        }
        console.log(add , "---->s", action.id)

        //array todos -.> index data update 
        
          let update = state.Todos.filter((item,index)=>{
             if(index===action.id) 
             item = add;
            return item;

            })

        return{
          ...state,
          updatebutton:true,
          Editadd: false,
          Todos:update,
          Open: false,
          optionedit:false
         
        };
        case 'Todos':
        return{
          ...state,
          
          Todos:[...state.Todos, {title:state.title,description:state.description}],
          

          

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
          // let add ={
          //   title :state.title,
          //   description: state.description
          // }
          

          let edit = state.Todos;
          
          let updat = edit.filter((item,index)=>{
            if(index === action.id)
             index = edit
             return index;
            });
          // console.log(updat);
          // state.title = updat[0].title;
          // state.description = updat[0].description
         return  {
          ...state,
          Todos : updat,
          Open: true,
          optionedit:false,
          Editadd: true,
        Editclose:false,
        selectTag:false,
        title:updat[0].title,
        description:updat[0].description,
        // title: '',
        // description:''
        
        
        

        }
        
      case 'optiondelete':
        // console.log(action.id ,"---s")
            let adel= state.Todos;
            let arr = adel.filter((item, index)=>index!==action.id)
          return{ 
            ...state,
            Todos : arr,
            Open:false,
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
      <Homepage  state ={state} dispatch={dispatch}/>
    </userContext.Provider>
  </>
  
  
}

export default App;
