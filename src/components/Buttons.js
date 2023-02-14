import React, { useContext } from 'react';
import { useState, useReducer } from 'react';
import { userContext } from '../App';
import Style from '../components/Button.module.css'

const Buttons = (props) => {
  const appContext = useContext(userContext)
  const selectedButton = appContext.selectedTags;
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
          appContext.tags.map(tag => <><div id={Style[`buttonColor-${tag.id}`]}
          className={selectedButton.includes(tag.id) ? ` border ${Style["dot"]}` : `${Style["dot"]}`}
          onClick={()=>appContext.dispatch({type:"selectTag", data: tag })}
        >
          <span id={Style[`span${tag.id}`]}></span>{tag.label}</div></>
          )
        }

      </div>
    </>
  )
}

export default Buttons
