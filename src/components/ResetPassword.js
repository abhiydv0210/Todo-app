import React,{useContext,useState} from 'react';
import './ResetPassword.css';
import { userContext } from '../App';
import useFetchAPI from './FetchAPI';


function ResetPassword() {
    const setContext = useContext(userContext)
  const { dispatch } = setContext;
  const [reset, setReset] = useState({});
  const Resetapi = useFetchAPI();


  const validate = (reset) => {
    if (!reset["email"])
      return false;
    if (!reset["otp"])
      return false;

    return true;
  }



  const Reset=()=>{

    const result = validate(reset)
    console.log("adsfasfs")
    if (!result) {
      alert("please fill all the filed correctly")
      return
    }
    Resetapi("user/otp-verification", "POST", reset, (res, error) => {
      if (error) {
        alert(error)
        console.log(error, "error from api")
      }
      else {
        
        console.log(res, "---->")
      }
    }); 
    
    dispatch({ type: "Newpassword" });

  }
    return (
        
        <div className='app-wrappe' id='main'>
            <form onSubmit={e => e.preventDefault()}>

                


                    <div id="dis" >
                        <h3 >Enter Your OTP</h3>

                        <h3><i id='mult' class="fa-sharp fa-solid fa-xmark" onClick={() => dispatch({ type: 'Resetpasswordclose' })} ></i></h3>
                    </div>
                    <div class="mb-0">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={reset["email"]} onChange={(e) => setReset(p => ({ ...p, email: e.target.value }))} />

                    </div>
                    <div class="mb-0">
                        <label for="exampleInputEmail1" class="form-label">Email Your One Time Password</label>
                        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={reset["otp"]} onChange={(e) => setReset(p => ({ ...p, otp: e.target.value }))} />

                    </div>
                    <br></br>
                    <button id='wid' type="login" class="btn btn-danger" onClick={Reset} >Create New Password</button>
                    <hr></hr>
                    <p id='acc'>Already have an account ?</p>

                    <p id='sign' onClick={() => dispatch({ type: 'Signupopen' })}>SignUp</p>

                
            </form>
        </div>



    )
}

export default ResetPassword
