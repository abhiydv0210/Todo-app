import React, { useContext, useState } from 'react';
import { userContext } from '../App';

import './Navbar.css';



import Style from '../components/Tags.module.css'

function Navbar({ id }) {
  const setContext = useContext(userContext)

  const { state, dispatch } = setContext
  const selectedButton = setContext.selectedTags;



  const addHandler = () => {
    if (!setContext.title || !setContext.description) {
      alert("Please fill the data");
      return;
    }

    dispatch({ type: "Editadd", id })
  }
  
  return (
    <>

    <div>
      <div className='header row'>
        <div className='col-sm-2'>
          <button type="button" className="btn btn-light" onClick={() => dispatch({ type: "Editclose" })}>cancel</button></div>
        <div className='col-sm-7'></div>
        <div className='col-sm-3'>
          {setContext.Editadd ? (

            <button type="button" className="btn btn-secondary" onClick={() => dispatch({ type: 'updatebutton' })}>
              Update</button>) : (
            <button type="button" id="wid" className="btn btn-secondary" onClick={addHandler}>
              Add</button>)}
          {/* {setContext.Editadd && <Card id={id}/>} */}
          

        </div>
        </div>
      

    </div>
    <div className={Style["spacing"]}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label" >Title</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="The first task Title" value={setContext.title} onChange={(e) => dispatch({ type: "title", id : e.target.value })} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Add Description Here ' rows="4" value={setContext.description} onChange={(e) => dispatch({ type: "description", id : e.target.value })}></textarea>
            </div>

          </div>
          
    </>
  )
}
export default Navbar;
