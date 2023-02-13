import React, { useContext } from 'react';
import {userContext} from '../App'

function Homepage1() {



    const todoContext = userContext(userContext)
   
   





    return (
        
            
                <div className='d-flex justify-content-between align-items-center w-full '>
                  <div className="row-mb-2">
                    <h3>todo</h3>
                    </div>
                    <div className='row-mb-7'></div>
                    <div className='row-mb-2' onClick={todoContext} ><h1   >+</h1>
                    </div>
                    

                </div>
            


      
    )
}

export default Homepage1
