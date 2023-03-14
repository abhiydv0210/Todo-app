import React, { useContext, useState } from 'react';
import { userContext } from '../App'
import Tags from './Tags';
import Card from './Card';
import Navbar from './Navbar';

import "./Sidebar.css"



function Sidebar(Hidedone, id) {
  const setContext = useContext(userContext)
  const [option, setOption] = useState(-1)
  const { dispatch } = setContext
 console.log(setContext.Todos,"=====")


  return (
     <div>
      {setContext.Open && <><div className="container   ">

        <div className='app-wrapper '>
          <Navbar />
          <Tags />
        </div>
      </div>
      </>}


      <div id="row" className='grid text-center fix '>
        <div className="g-row-3">
          <h3>todo</h3>
        </div>
        {/* <div className="g-row-6"><Card/></div> */}
        <div className='g-row-6'>

          {setContext.Todos.map((todo, i) => <div key={i} className='row'>
            <Card Hidedone={todo.Hidedone}  isDone={todo.isDone}  tags={todo.selectedTags}  title={todo.title} description={todo.description}  id={i} option={option} setOption={setOption}/></div>)}</div>
        <div className='g-row-3'><h1 onClick={() => dispatch({ type: 'Open' })} >+</h1>
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
          <input id='fcol5' className='mt-5' type='checkbox' onClick={() => dispatch({ type: 'HideDonetask',id,Hidedone })} />
          <label className='ps-2'>Hide done tasks </label>
        </div>

      </div>
      </div>


    

  )
}

export default Sidebar
