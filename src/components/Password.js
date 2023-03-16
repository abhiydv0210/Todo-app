import React,{useContext} from 'react';
import './Password.css';
import { userContext } from '../App';


function Password() {
    const setContext = useContext(userContext)

  const {dispatch } = setContext
  return (
    <div className='app' id='password'>
        <form>
        
      
      <div id="forget" >
        <h4 >Forget Password</h4>
      
      
      <h3><i id='multip' class="fa-sharp fa-solid fa-xmark" onClick={() => dispatch({ type: 'Forgetclose' })}></i></h3>
      </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

            
        </div>
        <button id='widt' type="Login" class="btn btn-danger">Send OTP</button>

        <hr></hr>
        <p id='already' >Already have an account ?</p>

        <p id='log' onClick={() => dispatch({ type: 'Signuplogin'})}>Login </p>
        </form>
      
    </div>
  )
}

export default Password
