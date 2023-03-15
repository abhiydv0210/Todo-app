import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div id='main'>
      
      <form>
      <div id="dis" >
        <h3 >Log in</h3>
      
      
      <h3>+</h3>
      </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button id='wid' type="Login" class="btn btn-primary">Login</button>
        <h6 id='back'>Forget Password ?</h6>
        <hr></hr>
        <p id='acc'>Already have an account ?</p>
        <p id='sign'>SignUp</p>

      </form>

    </div>
  )
}

export default LoginPage;
