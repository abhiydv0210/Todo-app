import React, { useContext } from 'react';
import { userContext } from '../App';
import './Card.css';
import { useState } from 'react';
import Option from './Option';

const Card = ({ title, description, id, tags, setOption, option }) => {





  console.log(id, 'i m a card');

console.log(tags,'im a tag');
  // const handleOption=()=>{
  //   console.log("hey Abhishek");

  // }
  const clickHandler = (id) => {
    if(option===id)
    setOption(-1)
    else setOption(id)
  }
  return (

    // <div className="col-sm-6  ">
      <div className="card">
        <div className="card-body">
          <div className='d-flex'>
            <h5 className="text-bold col-sm-4">{title}</h5>
            <div className='col-sm-7'></div>
            <div className='col-sm-1' style={{ position: "relative" }}>
              <h4 id="d1" onClick={()=>clickHandler(id)}>...</h4>
              {option===id &&<Option id={id} />}
            </div>
          </div>


        
          <p className='col-sm-12'>{description}</p>


          <div className='d-flex'>
            <div className='col-sm-4'>
             
            {tags.map(tag=><div key={tag.id}>{tag.label}</div>)}
           
            </div>
           
            <div className='col-sm-5'> </div>









            <div className='col-sm-4'>
              <input id="m1" type="checkbox" /><label className="ms-1">Done</label>
            </div>
          </div>
        </div>
      </div>
    // </div>

  )
}

export default Card
