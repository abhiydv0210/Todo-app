import React from 'react';

import "./Homepage.css";
import Homepage1 from './Homepage1';

function Homepage({id}) {

  return (
    <div>
      <Homepage1 id={id}/>




      <div className='col-sm-3 list'>
        {/* <div id ='e2'> */}
        <div id='a1'>
          <div id='fcol1'></div><div>Study</div></div>
          <div id='a2'>
        <div id='fcol2'></div><div>Work</div></div>
        <div id='a3'>
        <div id='fcol3'></div><div>Entertainmnet</div></div>
        <div id='a4'>
        <div id='fcol4'></div><div>Family</div></div>
        <div id='a5'>
        <input id='fcol5' className='mt-5' type='checkbox'/>
        <label className='ps-2'>Hide done tasks </label>
        </div>

      </div>


    </div>
    // </div>











  )
}

export default Homepage
