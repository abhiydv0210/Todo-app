import React, { useReducer } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

const initialState = {
  Open: false,
  Editclose: false,
  title: "",
  Editadd: false,
  selectTag: false,
  updatebutton: false,
  Todos: [],
  description: "",
  optionedit: false,
  optiondelete: false,
  selectedTagIds: [],
  Donetask: false,
  HideDonetask: false,


  tags: [
    {
      label: "Work",
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
  selectedTags: []
}

export const userContext = React.createContext(initialState);


const reducer = (state, action) => {
  switch (action.type) {

    case 'Open':

      return {
        ...state,
        Open: true,
        Editadd: false,
        Editclose: false,
        selectedTags: [],
        isDone: false,
        title: '',
        description: '',
        selectedTagIds: [],

      };
    case 'updatebutton':
      let add = {
        title: state.title,
        description: state.description,
        selectedTags: state.selectedTags,
        isDone: false

      }
      console.log(add, "---->s")
      if (typeof state.currentID === undefined)
        return { ...state }
      //array todos -.> index data update 
      state.Todos[state.currentID] = add;
      console.log(state.Todos, "todos")

      return {
        ...state,
        updatebutton: true,
        Editadd: false,
        Open: false,
        optionedit: false,

      };
    case 'Todos':
      return {
        ...state,
        isDone: false,

        Todos: [...state.Todos, { title: state.title, description: state.description, selectedTags: [state.selectedTags] }],
      }

    case 'Editclose':
      return {
        ...state,
        Editclose: true,
        Open: false,
        Editadd: false,
        // selectTag: false,
        title: action.data,
        description: action.data,
        // selectedTags: [action.id]
      };

    case 'Editadd':
      let todo = {
        title: state.title,
        description: state.description,
        selectedTags: state.selectedTags,
        isDone: false
      }
      return {
        ...state,
        Editadd: true,
        Editclose: false,
        Open: false,
        isDone: false,
        title: action.data,
        description: action.data,
        Todos: [...state.Todos, todo],
        title: "",
        description: "",
        // selectedTags:[action.data] 
        selectedTags: [state.selectedTags]
      };
    case 'optionedit':

      let edit = state.Todos;
      // console.log(action, "--->action")

      let updat = edit.filter((item, index) => {
        if (index === action.id)
          index = edit
        return item;
      });

      return {
        ...state,
        Todos: updat,
        Open: true,
        optionedit: true,
        Editadd: true,
        updatebutton: true,
        Editclose: false,
        currentID: action.id,
        // tagID: updat[action.id].selectedTagIds,
        selectedTags: updat[action.id].selectedTags,
        title: updat[action.id].title,
        description: updat[action.id].description,

      }

    case 'optiondelete':

      let adel = state.Todos;
      let arr = adel.filter((item, index) => index !== action.id)
      return {
        ...state,
        Todos: arr,
        Open: false,
        optiondelete: true
      };

    case "selectTag":
      // console.log(action.data, "--->")

      let tags = [...state.selectedTags];
      const filterTags = state.selectedTags.filter((item) => item.id === action.data)
      if (filterTags.length > 0) {
        //if there's already tag exists remove it
        const filterdTags = state.selectedTags.filter((item) => item.id !== action.data)
        tags = filterdTags;
      } else {
        tags.push(action.data);
      }
      let tagID = [...state.selectedTagIds]
      const filterTagID = state.selectedTagIds.filter((tagID) => tagID === action.data.id)
      if (filterTagID.length > 0) {
        const filterdTagID = state.selectedTagIds.filter((tagID) => tagID !== action.data.id)
        tagID = filterdTagID;
      } else {
        tagID.push(action.data.id);
      }

      return {
        ...state,
        selectedTags: tags,
        selectedTagIds: tagID,

      };
    case 'Donetask':
      let hide = state.Todos;
      // console.log(action, 'action')
      hide[action.id] = { ...hide[action.id], isDone: !action.isDone }
      // console.log(hide, '======>');
      //  [action.id] => isDone = true 
      return {
        ...state,
        Todos: hide,
        Donetask: true
      };
    case 'HideDonetask':
      // let task = state.Todos;
      // console.log(action, 'action')
      // task[action.id] = { ...task[action.id], Hidedone: !action.Hidedone }

      return {
        ...state,
        HideDonetask:!state.HideDonetask
      }
    case 'tags':
      return {
        ...state,
        tags: action.id
      }
    case "title":
      return {
        ...state,
        title: action.id,

      };
    case "description":
      return {
        ...state,
        description: action.id,

      };

  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <>

    <userContext.Provider value={{ ...state, dispatch }}>
      <Sidebar state={state} dispatch={dispatch} />
    </userContext.Provider>
  </>
}
export default App;
