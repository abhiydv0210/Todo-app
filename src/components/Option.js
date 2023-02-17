import React,{useContext} from 'react';
import { userContext } from '../App';
import './Option.css';
import Navbar from './Navbar';
import Title from './Title';
import Buttons from './Buttons';

const Option = () => {
    const setContext =useContext(userContext)
    const{state,dispatch} =setContext
    return (
        <div>
      
      {/* {setContext.optionedit && <><div className="container">

        <div className='app-wrapper '>
          <Navbar />
          <Title/>

          <Buttons/>
      

        </div> */}
        


      {/* </div>

      </>} */}
        <div className='e1' style={{ position: "absolute",  zIndex: 11111 }}>
            <button id="t1"  className='btn btn-light' onClick={()=>dispatch({type:'optionedit'})}>Edit...</button>
            <button id="t2" className='btn btn-light' onClick={()=>dispatch({type:'optiondelete'})}>Delete</button>
        </div>
        </div>
    )
}

export default Option
