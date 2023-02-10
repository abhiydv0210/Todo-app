import React, { useState } from 'react'

const Navbar = (props) => {


  const {setTodo} =props
  
  
  return (
    

    <div className='header row'>
      <div className='col-sm-2'>
        <button type="button" className="btn btn-light">cancel</button></div>
      <div className='col-sm-9'></div>
      <div className='col-sm-1'>
        <button type="button" className="btn btn-secondary" onClick={setTodo}>
          Add</button></div>


    </div>

  )
}

export default Navbar;
