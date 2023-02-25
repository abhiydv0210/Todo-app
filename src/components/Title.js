import React, { useContext } from 'react'

import Style from '../components/Button.module.css'
import { userContext } from '../App'


const Title = ({id}) => {
  const setContext = useContext(userContext)
  const{dispatch}= setContext

  
  
  return (
    <div className={Style["spacing"]}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label" >Title</label>
        <input type="text"  className="form-control" id="exampleFormControlInput1" placeholder="The first task Title" value={setContext.title} onChange={(e)=>dispatch({type:"title" ,data:e.target.value})} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Add Description Here ' rows="4" value={setContext.description} onChange={(e)=>dispatch({type:"description",data:e.target.value}) }></textarea>
      </div>

    </div>
  )
}


export default Title
