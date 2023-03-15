import React, { useContext } from 'react';
import { userContext } from '../App';
import './Card.css';
import Option from './Option';

const Card = ({ title, description, id, tags, setOption, option,isDone}) => {

  const setContext = useContext(userContext)

  const { dispatch } = setContext


  const clickHandler = (id) => {
    if(option===id)
    setOption(-1)
    else setOption(id)
  }
  // console.log(option,'option');
  return (
    <>
    
    <div className='fit'>
    <div className="tag  ">
      <div className="card">
        <div className="card-body">
          <div className='d-flex'>
          { isDone ?
            <h5 className="text-bold col-sm-4"><del>{title}</del></h5> :
            <h5 className="text-bold col-sm-4">{title}</h5>}

            <div className='col-sm-6'></div>
            <div className='col-sm-2' style={{ position: "relative" }}>
              <h4 id="d1" onClick={()=>clickHandler(id)}>...</h4>
              {option===id &&<Option id={id} />}
            </div>
          </div>


          { isDone ?
          <p className='col-sm-12'><del>{description}</del></p>:
              <p className='col-sm-12'>{description}</p>}


          <div className='d-flex'>
            <div id="tags" className='col-sm-4'>
             
            {tags.map(tag=><div key={tag.id} className={`tag${tag.id}`}></div>)}
           
            </div>
           
            <div className='col-sm-5'> </div>

            <div className='col-sm-4'>
              <input id="m1" type="checkbox" onClick={() => dispatch({ type: 'Donetask',id,isDone})}/><label className="ms-1" >Done</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>

  )
}

export default Card
