import React, { useContext } from 'react';
import { userContext } from '../App'
import Buttons from './Buttons';
import Navbar from './Navbar';
import Title from './Title';

function Homepage1() {


  console.log()
  const todoContext = useContext(userContext)

  console.log(todoContext)





  return (


    <div>
      {todoContext.add && <><div className="container">

        <div className='app-wrapper'>
          <Navbar />
          <Title
          />

          <Buttons/>

        </div>


      </div>

      </>}

      <div className='d-flex justify-content-between align-items-center w-full '>
        <div className="row-mb-2">
          <h3>todo</h3>
        </div>
        <div className='row-mb-7'></div>
        <div className='row-mb-2'  ><h1 onClick={() => todoContext.dispatch({ type: 'add' })}   >+</h1>
        </div>


      </div>
    </div>




  )
}

export default Homepage1
