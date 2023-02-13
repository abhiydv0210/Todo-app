import React from 'react';
import "./Homepage.css";
import Homepage1 from './Homepage1';

function Homepage() {
 
  
  return (
    
      

    
<div>
<Homepage1/>

  
  

        <div className='col-sm-3'>
        
          
        <button className='mt-4' id='dot-1'></button>
        <label className='ms-1 my-auto'> Work</label>
        
      
      <br/>
      
      <button className='mt-4' id='dot-2'></button>
        <label className='ms-1 my-auto'> Study</label>
      
        <br/>
        
        <button className='mt-4' id='dot-3'></button>
        <label className='ms-1 my-auto'> Entertainment</label>
        
        <br/>
        
        <button className='mt-4' id='dot-4'></button>
        <label className='ms-1 my-auto'> Family</label>
        
        <br/>
        
        <input className='mt-5' type='checkbox'/>
        <label className='ps-2'>Hide done tasks </label>
        
        </div>

      </div>
      
    
    
  
    
    
    

  )
}

export default Homepage
