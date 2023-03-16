import React,{useContext} from 'react';
import './SignUp.css';
import { userContext } from '../App';



function SignUp() {
    const setContext = useContext(userContext)

  const {dispatch } = setContext
  return (
    <div className='app-wrap' id="signup">
    <form>
    
      
      <div id="dist" >
        <h3 >Sign Up</h3>
      
      
      <h3><i id='multi' class="fa-sharp fa-solid fa-xmark" onClick={() => dispatch({ type: 'Signupclose'})}></i></h3>
      </div>
      <div class="mb-0">
          <label for="exampleInputEmail1" class="form-label">First Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-0">
          <label for="exampleInputEmail1" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-0">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-0">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-0">
          <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div id='check'>
        <input id='term' className='mt-5' type='checkbox'  />
          <label className='ps-2'> I agree With Terms and Privacy </label></div>

        <button id='wid' type="Login" class="btn btn-danger">Sign Up</button>
        
        <hr></hr>
        <p id='already' >Already have an account ?</p>

        <p id='log' onClick={() => dispatch({ type: 'Signuplogin'})}>Login </p>

        
        
        </form> 
    </div>
    
  )
}

export default SignUp
