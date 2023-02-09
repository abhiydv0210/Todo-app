import React from 'react';
 import Style from '../components/Button.module.css'

const Buttons = () => {
  return (
    <>
    <p id ={Style["space"]}>Tags</p>
    <div className={Style["color"]}>
        <div id ={Style["yellow"]} className={Style["dot"]}><span id ={Style["span1"]}></span>Work</div>
        <div id ={Style["green"]} className={Style["dot"]}><span id ={Style["span2"]}></span>Study</div>
        <div id ={Style["blue"]} className={Style["dot"]}><span id ={Style["span3"]}></span>Environment</div>
        <div id ={Style["red"]} className={Style["dot"]}><span id ={Style["span4"]}></span>Family</div>
      
    </div>
    </>
  )
}

export default Buttons
