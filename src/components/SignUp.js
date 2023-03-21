import React, { useContext, useState } from 'react';
import './SignUp.css';
import { userContext } from '../App';
import useFetchAPI from './FetchAPI';



function SignUp() {
  const setContext = useContext(userContext)
  const [data, setData] = useState({});
  const api = useFetchAPI();
  const validate = (data) =>{
    if(!data["firstName"]  )
    return false; 
    // else if(!data["lastName"] && data["lastName"].length>=3 )
    // return false; 
    // else if(!data["email"] && data["email"].length>=8 )
    // return false; 
    // else if(!data["password"] && data["password"].length>=5 )
    // return false; 
    // else if(!data["confirm_password"] && data["confirm_password"].length>=5 )
    // return false; 




    return true ; 
  }
  const makeLogin = () => {
  const result = validate(data) //true or false
  if(!result){
    alert("please fill all the filed correctly")
    return
  }
  api("user/register", "POST", data, (res, error)=>{
    if(error){
      alert(error)
      console.log(error, "error from api")
    }else{

      console.log(res, "---->")
    }
  })
  }
  const { dispatch } = setContext
  return (
    <div className='app-wrap' id="signup">
      <form onSubmit={e=>e.preventDefault()}>
        <div id="dist" >
          <h3 >Sign Up</h3>


          <h3><i id='multi' class="fa-sharp fa-solid fa-xmark" onClick={() => dispatch({ type: 'Signupclose' })}></i></h3>
        </div>
        <div class="mb-0">
          <label for="exampleInputEmail1" class="form-label" >First Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={data["firstName"]} onChange={(e) => setData(p => ({ ...p, firstName: e.target.value }))} />

        </div>
        <div class="mb-0">
          <label for="exampleInputEmail1" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={data["lastName"]} onChange={(e) => setData(p => ({ ...p, lastName: e.target.value }))} />

        </div>
        <div class="mb-0">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={data["email"]}  onChange={(e) => setData(p => ({ ...p, email: e.target.value }))}/>

        </div>
        <div class="mb-0">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" required value={data["password"]} onChange={(e) => setData(p => ({ ...p, password: e.target.value }))}/>
        </div>
        <div class="mb-0">
          <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" required value={data["confirm_password"]} onChange={(e) => setData(p => ({ ...p, confirm_password: e.target.value }))} />
        </div>
        <div id='check'>
          <input id='term' className='mt-5' type='checkbox' />
          <label className='ps-2'> I agree With Terms and Privacy </label></div>

        <button id='wid' type="Login" class="btn btn-danger" onClick={makeLogin}>Sign Up</button>

        <hr></hr>
        <p id='already' >Already have an account ?</p>

        <p id='log' onClick={() => dispatch({ type: 'Signuplogin' })}>Login </p>



      </form>
    </div>

  )
}

export default SignUp
