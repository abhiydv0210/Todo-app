import React,{useContext,useState} from 'react';
import './Password.css';
import { userContext } from '../App';
import useFetchAPI from './FetchAPI';


function Password() {
    const setContext = useContext(userContext)
  const {dispatch } = setContext;
  const api = useFetchAPI();
  const validate = (pass) =>{
    if(!pass["email"] )
    return false;
    else
    return true ; 
  }
  const [pass, setPass] = useState({})
  const sendOTP = () => {
    const result = validate(pass) 
    if(!result){
      alert("please fill all the filed correctly")
      return
    }
    api("user/forgot-password", "POST", pass, (res, error)=>{
      if(error){
        alert(error)
        console.log(error, "error from api")
      }else{
  
        console.log(res, "---->")
      }
    })
    }

  return (
    <div className='app' id='password'>
        <form onSubmit={e=>e.preventDefault()}>
        
      
      <div id="forget" >
        <h4 >Forget Password</h4>
      
      
      <h3><i id='multip' class="fa-sharp fa-solid fa-xmark" onClick={() => dispatch({ type: 'Forgetclose' })}></i></h3>
      </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={pass["email"]} onChange={(e) => setPass(p => ({ ...p, email: e.target.value }))}/>

            
        </div>
        <button id='widt' type="Login" class="btn btn-danger" onClick={sendOTP}>Send OTP</button>

        <hr></hr>
        <p id='already' >Already have an account ?</p>

        <p id='log' onClick={() => dispatch({ type: 'Signuplogin'})}>Login </p>
        </form>
      
    </div>
  )
}

export default Password
