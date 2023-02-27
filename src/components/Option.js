import React,{useContext} from 'react';
import { userContext } from '../App';
import './Option.css';


const Option = ({id}) => {
    const setContext =useContext(userContext)
    const{state,dispatch} =setContext
    console.log(id,"hey i m option")
    return (
        <div className='e2' >
      
      
        <div className='e1' style={{ position: "absolute",  zIndex: 11111 }}>
            <button id="t1"  className='btn btn-light' onClick={()=>dispatch({type:'optionedit',id})}>Edit...</button>
            <button id="t2" className='btn btn-light' onClick={()=>dispatch({type:'optiondelete', id})}>Delete</button>
        </div>
        

      </div>

      
       
    )
}

export default Option
