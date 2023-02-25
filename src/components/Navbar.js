import React, {useContext, useState} from 'react';
import { userContext } from '../App'; 
import Card from './Card';
import './Navbar.css'

function Navbar({id}) {
  const setContext = useContext(userContext)

  const{state, dispatch} =setContext
 
  
  
  const addHandler=()=>{
    if(!setContext.title|| !setContext.description){
      alert("Please fill the data");
      return; 
    }
    
    dispatch({type:"Editadd",id}) 
  }
  // console.log(setContext.updatebutton)
  // console.log(id, 'hey navbar');
  return (
    
   <div>
    <div className='header row'>
      <div className='col-sm-2'>
        <button type="button" className="btn btn-light" onClick={()=>dispatch({type:"Editclose"})}>cancel</button></div>
      <div className='col-sm-7'></div>
      <div className='col-sm-3'>
        {setContext.Editadd ?(
        
        <button type="button"  className="btn btn-secondary" onClick={()=>dispatch({type:'updatebutton',id})}>
        Update</button>):(
        <button type="button" id="wid" className="btn btn-secondary"  onClick={addHandler}>
          Add</button>)}
          {/* {setContext.Editadd && <Card id={id}/>} */}
          </div>
          

          </div>
          
      </div>


    

  )
}




export default Navbar;
