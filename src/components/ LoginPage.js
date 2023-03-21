import React, {useContext, useState} from 'react';
import './LoginPage.css';
import { userContext } from '../App';
import useFetchAPI from './FetchAPI';


function LoginPage() {
  const setContext = useContext(userContext)
  const {dispatch } = setContext;
  const [log, setLog] = useState({})
  const api = useFetchAPI();
  
  const validate = (data) =>{
    if(!log["email"] )
    return false;
    if(!log["password"]  )
    return false;

    return true ; 
  }
  const login = () => {
    console.log(log,"---")
    const result = validate(log)
    console.log("adsfasfs")
    if(!result){
      alert("please fill all the filed correctly")
      return
    }
    api("user/login", "POST", log, (res, error)=>{
      if(error){
        alert(error)
        console.log(error, "error from api")
      }else{
        localStorage.setItem("token", res.access_token)
        console.log(res, "---->")
      }
    })
    }
   
  return (
    <form onSubmit={e=>e.preventDefault()}>
    
    <div className='app-wrappe' id='main'>
      
      
      <div id="dis" >
        <h3 >log in</h3>
      
      <h3><i id='mult' class="fa-sharp fa-solid fa-xmark" onClick={() => dispatch({ type: 'Loginclose'})} ></i></h3>
      </div>
        <div class="mb-0">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required   value={log["email"]} onChange={(e) => setLog(p => ({ ...p, email: e.target.value }))}/>
            
        </div>

        <div class="mb-0">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={log["password"]} required 
             onChange={(e) => setLog(p => ({ ...p, password: e.target.value }))}/>
        </div>
        <br></br>
        
        <button id='wid' type="login" class="btn btn-danger" onClick={login}>login</button>
        <h6 id='back' onClick={() => dispatch({ type: 'Forgetpassword'})}>Forget Password ?</h6>
        <hr></hr>
        <p id='acc'>Already have an account ?</p>
        
        <p id='sign' onClick={() => dispatch({ type: 'Signupopen'})}>SignUp</p>

      

    </div>
    </form>
  )
}

export default LoginPage;
