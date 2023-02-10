import React from 'react'
import { useState } from 'react'
import Style from '../components/Button.module.css'


const Title = (props) => {

  const{title,setTitle,des,setDes} = props
  
  const eventhandler = (e) => {
    setTitle(e.target.value)

  }
  const handler = (e) => {
    setDes(e.target.value)

  }
  return (
    <div className={Style["spacing"]}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label" >Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="The first task Title" onChange={eventhandler} value={title} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Add Description Here ' rows="3" onChange={handler} value={des}></textarea>
      </div>

    </div>
  )
}

export default Title
