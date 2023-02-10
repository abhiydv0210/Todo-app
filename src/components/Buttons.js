import React from 'react';
import { useState } from 'react';
import Style from '../components/Button.module.css'

const Buttons = (props) => {
  const {selectedButton,setSelectedButton}= props
  
  const tags = [
    {
      label: "work",
      id: 0
    },
    {
      label: "Study",
      id: 1
    }
    ,
    {
      label: "Environment",
      id: 2
    },
    {
      label: "Family",
      id: 3
    }
  ]
  console.log(selectedButton)
  return (
    <>
      <p id={Style["space"]}>Tags</p>
      <div className={Style["color"]}>
        {/* <div id={Style["yellow"]} className={Style["dot"]}><span id={Style["span1"]}></span>Work</div>
        <div id={Style["green"]} className={Style["dot"]}><span id={Style["span2"]}></span>Study</div>
        <div id={Style["blue"]} className={Style["dot"]}><span id={Style["span3"]}></span>Environment</div>
        <div id={Style["red"]} className={Style["dot"]}><span id={Style["span4"]}></span>Family</div> */}

        {
          tags.map(tag => <div id={Style[`buttonColor-${tag.id}`]} 
          className={selectedButton.includes(tag.id)?` border ${Style["dot"]}`:`${Style["dot"]}`}
            onClick={()=>setSelectedButton((e)=>e.includes(tag.id)? e.filter(e=>e!==tag.id):[...e, tag.id])}>
           <span id={Style[`span${tag.id}`]}></span>{tag.label}</div>
          )
        }

      </div>
    </>
  )
}

export default Buttons
