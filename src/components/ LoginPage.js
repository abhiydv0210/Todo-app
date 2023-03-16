import React, {useContext} from 'react';
import './LoginPage.css';
import { userContext } from '../App';


function LoginPage() {
  const setContext = useContext(userContext)

  const {dispatch } = setContext
  return (
    <div className='app-wrappe' id='main'>
      
      <form>
      <div id="dis" >
        <h3 >Log in</h3>
      
      <h3><i id='mult' class="fa-sharp fa-solid fa-xmark" onClick={() => dispatch({ type: 'Loginclose'})} ></i></h3>
      </div>
        <div class="mb-0">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>

        <div class="mb-0">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <br></br>
        
        <button id='wid' type="Login" class="btn btn-danger">Login</button>
        <h6 id='back' onClick={() => dispatch({ type: 'Forgetpassword'})}>Forget Password ?</h6>
        <hr></hr>
        <p id='acc'>Already have an account ?</p>
        
        <p id='sign' onClick={() => dispatch({ type: 'Signupopen'})}>SignUp</p>

      </form>

    </div>
  )
}

export default LoginPage;
