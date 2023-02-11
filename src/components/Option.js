import React from 'react';
import './Option.css'

const Option = () => {
    return (
        <div className='e1' style={{ position: "absolute",  zIndex: 11111 }}>
            <button id="t1"  className='btn btn-light'>Edit...</button>
            <button id="t2" className='btn btn-light'>Delete</button>
        </div>
    )
}

export default Option
