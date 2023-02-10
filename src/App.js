
import './App.css';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import Title from './components/Title';
import {useState} from "react";
import Card from './components/Card';

function App() {
  const [todo,setTodo] = useState([]);
  const [title, setTitle] = useState();
  const [des, setDes] = useState();
  const [selectedButton,setSelectedButton] = useState([]);

  const todohandler=()=>{
    const todos={title,description:des, tags:selectedButton}
    setTodo([...todo, todos])
    
  }
console.log(todo);
// return <>
// <Card/>
// </>;
  return (
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
  );
}

export default App;
