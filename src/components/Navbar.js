import React, {useState, useContext} from 'react';
import { userContext } from '../App'; 
import Buttons from './Buttons';
import Title from './Title';

function Navbar(props) {
  const appContext = useContext(userContext)
  function AddTodo(){
    useContext.dispatch({type :"EditClose"})
    const input={
      
      iscompleted: false
      
    }
    userContext.dispatch({type:"addtodo",data:input})
    console.log(input);
  }
  
  

  const {setTodo} =props
  const cancelHandle = ()=>{
    userContext.dispatch({type:'Editclose'})


  }
  
  
  return (
    
   <div>
    <div className='header row'>
      <div className='col-sm-2'>
        <button type="button" className="btn btn-light" onClick={cancelHandle}>cancel</button></div>
      <div className='col-sm-9'></div>
      <div className='col-sm-1'>
        <button type="button" className="btn btn-secondary" onClick={setTodo}>
          Add</button></div>
          </div>
          
      </div>


    

  )
}

export default Navbar;
