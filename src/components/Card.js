import React from 'react';
import './Card.css';
import { useState } from 'react';
import Option from './Option';

const Card = () => {
  const [option, setOption] = useState(false)


  // const handleOption=()=>{
  //   console.log("hey Abhishek");

  // }

  return (

    <div className='container'>
     
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <div className='d-flex'>
                <h5 class="text-bold col-sm-6 ">The First task Title</h5>
                <div className='col-sm-5'></div>
                <div className='col-sm-1' style={{ position: "relative" }}>
                  <h4 id="d1" onClick={()=> setOption(!option)}>...</h4>
                  {option && <Option/>}
                </div>
              </div>

              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div className='d-flex'>
                <div className='yel'>

                  <div id="yel1"></div>
                  <div id="yel2"></div>
                  <div id="yel3"></div>
                </div>
                <div className='col-sm-8'></div>









                <div className='col-sm-2'>
                  <input id="m1" type="checkbox" /><label className="ms-1">Done</label>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card
