import React,{useContext} from 'react';
import { userContext } from '../App'
import Buttons from './Buttons';
import Card from './Card';
import Navbar from './Navbar';
import Title from './Title';
import "./Sidebar.css"



function Homepage({id}) {
  const setContext  = useContext(userContext)
  const{state,dispatch}= setContext


  return (
    <div>
      {setContext.Open && <><div  className="container">

        <div className='app-wrapper '>
          <Navbar id={id} />
          <Title id={id} /> 
          <Buttons id={id} />
        </div>
      </div>
      </>}


      <div id="row" className='grid text-center fix '>
        <div className="g-row-3">
          <h3>todo</h3>
        </div>
        {/* <div className="g-row-6"><Card/></div> */}
        <div className='g-row-6'>
          
          {setContext.Todos.map((todo, i)=><div key={i} className='row'>
          <Card title={todo.title} description={todo.description} id={i}   /></div>)}</div>
        <div className='g-row-3'  ><h1 onClick={() => dispatch({ type: 'Open',id })} >+</h1>
        </div>
       
      </div>
    
      <div className='col-sm-3 list'>
        {/* <div id ='e2'> */}
        <div id='a1'>
          <div id='fcol1'></div><div>Study</div></div>
          <div id='a2'>
        <div id='fcol2'></div><div>Work</div></div>
        <div id='a3'>
        <div id='fcol3'></div><div>Entertainmnet</div></div>
        <div id='a4'>
        <div id='fcol4'></div><div>Family</div></div>
        <div id='a5'>
        <input id='fcol5' className='mt-5' type='checkbox'/>
        <label className='ps-2'>Hide done tasks </label>
        </div>

      </div>


    </div>
  
  )
}

export default Homepage
