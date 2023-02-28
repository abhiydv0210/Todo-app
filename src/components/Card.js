import React, { useContext } from 'react';
import { userContext } from '../App';
import './Card.css';
import { useState } from 'react';
import Option from './Option';

const Card = ({ title, description, id, tags, setOption, option }) => {





  console.log(id, 'i m a card');


  // const handleOption=()=>{
  //   console.log("hey Abhishek");

  // }
  const clickHandler = (id) => {
    if(option===id)
    setOption(-1)
    else setOption(id)
  }
  return (

    <div className="col-sm-6  mb-sm-0">
      <div className="card">
        <div className="card-body">
          <div className='d-flex'>
            <h5 className="text-bold col-sm-6 ">{title}</h5>
            <div className='col-sm-4'></div>
            <div className='col-sm-2' style={{ position: "relative" }}>
              <h4 id="d1" onClick={()=>clickHandler(id)}>...</h4>
              {option===id &&<Option id={id} />}
            </div>
          </div>



          <p className="card-text">{description}</p>


          <div className='d-flex'>
            <div className='yel'>

              {tags}
            </div>
            <div className='col-sm-10'></div>









            <div className='col-sm-2'>
              <input id="m1" type="checkbox" /><label className="ms-1">Done</label>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card
