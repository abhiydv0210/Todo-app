import React, {useContext} from 'react';
import { userContext } from '../App'; 
import Card from './Card';

function Navbar() {
  const setContext = useContext(userContext)

  const{state, dispatch} =setContext
 
  // const {setTodo} =props
  
  
  
  return (
    
   <div>
    <div className='header row'>
      <div className='col-sm-2'>
        <button type="button" className="btn btn-light" onClick={()=>dispatch({type:"Editclose"})}>cancel</button></div>
      <div className='col-sm-9'></div>
      <div className='col-sm-1'>
        <button type="button" className="btn btn-secondary" onClick={()=>dispatch({type:"Editadd"})}>
          Add</button>
          {setContext.Editadd && <Card/>}
          </div>
          

          </div>
          
      </div>


    

  )
}

export default Navbar;
