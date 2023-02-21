import React, { useContext } from 'react';
import { userContext } from '../App'
import Buttons from './Buttons';
import Card from './Card';
import Navbar from './Navbar';
import Title from './Title';
import "./Homepage1.css"

function Homepage1() {


  
  const setContext  = useContext(userContext)
  const{state,dispatch}= setContext



  console.log(setContext)





  return (


    <div >
      
      {setContext.Open && <><div  className="container">

        <div className='app-wrapper '>
          <Navbar />
          <Title/>

          <Buttons/>
      

        </div>
        


      </div>
      

      </>}


      <div id="row" className='grid text-center fix '>
        <div className="g-row-3">
          <h3>todo</h3>
        </div>
        {/* <div className="g-row-6"><Card/></div> */}
        <div className='g-row-6'>{setContext.Todos.map((todo, i)=><div key={i} className='row'><Card  title={todo.title} description={todo.description} id={i}   /></div>)}</div>
        <div className='g-row-3'  ><h1 onClick={() => dispatch({ type: 'Open' })} >+</h1>
        </div>



      </div>
    </div>




  )
}

export default Homepage1
