import React from 'react'
import Style from '../components/Button.module.css'


const Title = () => {
  return (
    <div className= {Style["spacing"]}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="The first task Title"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Add Description Here ' rows="3"></textarea>
          </div>
                
    </div>
  )
}

export default Title
