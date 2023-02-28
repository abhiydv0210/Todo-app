import React, { useReducer } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

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
          selectTag:true,
          // tags:action.id,
          title:action.id,
          description:action.id,
          title:'',
          description:''
          
        };
        case'updatebutton':
        let add ={
          title : state.title,
          description: state.description
        }
        console.log(add , "---->s")
        if(typeof state.currentID===undefined)
        return {...state}
        //array todos -.> index data update 
        state.Todos[state.currentID] = add ; 
        console.log(state.Todos, "todos")

        return{
          ...state,
          updatebutton:true,
          Editadd: false,
          Open: false,
          optionedit:false,
        
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
            tags: state.tags
          }
        return{
          ...state,
          Editadd: true,
          Editclose: false,
          Open: false,
          selectTag:false,
          // tags:action.data,
          title:action.data,
          description:action.data,
          Todos:[...state.Todos, todo],
          // selectTag:[...state.selectedTags, action.data],
          title:"",
          description:"",
          selectedTags:[] 
        };
        case 'optionedit':
          
          let edit = state.Todos;
          console.log(action, "--->action")

          let updat = edit.filter((item,index)=>{
            if(index === action.id)
             index = edit
             return item;
            });
          
         return  {
          ...state,
          Todos : updat,
          Open: true,
          optionedit:true,
          Editadd: true,
          updatebutton:true,
        Editclose:false,
        currentID: action.id, 
        title:updat[action.id].title,
        description:updat[action.id].description,
        
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
        // console.log(action.data, "--->")
        // let data = [action.data]; 
       const filter =  state.tags.filter((item)=>item.id===action.id);
        //[1,2,]
        const current =  state.update.filter((item)=>item.id===action.id);

        let update = [...state.update, ...filter];
      
       if(current.length>0){
        update = update.filter(item=>item.id!==action.id);
       }
      //  console.log(data,"===")
        return {
      ...state,
      filter,
      update
      };
      case 'tags':
        return{
          ...state,
          tags:action.id
        }
      case "title":
        return{
          ...state,
          title: action.id,
          
        };
      case "description":
        return{
          ...state,
          description : action.id,
          
        };
        
}}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <>
    <userContext.Provider value={{ ...state, dispatch }}>
      <Sidebar  state ={state} dispatch={dispatch}/>
    </userContext.Provider>
  </>
}
export default App;
