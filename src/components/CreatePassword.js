import React, { useContext, useState } from 'react';
import './LoginPage.css';
import { userContext } from '../App';
import useFetchAPI from './FetchAPI';

function CreatePassword() {
    const setContext = useContext(userContext)

    const { dispatch } = setContext;
    const Createapi = useFetchAPI();
    const [create, setCreate] = useState({});

    const validate = (reset) => {
        if (!create["password"])
          return false;
        if (!create["confirmPassword"])
          return false;
    
        return true;
      }

    const login = () => {
        const result = validate(create)
        console.log("adsfasfs")
        if (!result) {
            alert("please fill all the filed correctly")
            return
        }
        Createapi("user/verify-reset-password", "PUT",create,  (res, error) => {
            if (error) {
                alert(error)
                console.log(error, "error from api")
            }
            else {
                localStorage.setItem("token", res.access_token)

                console.log(res, "---->")
            }
        });

    }
    return (
        <div className='app-wrappe' id='main'>
            <form>
                <div id="dis" >
                    <h3 >Create Password</h3>

                    <h3><i id='mult' class="fa-sharp fa-solid fa-xmark" onClick={() => dispatch({ type: 'Createpasswordclose' })} ></i></h3>
                </div>
                <div>
                    <div class="mb-0">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required value={create["password"]} 
                            onChange={(e) => setCreate(p => ({ ...p, password: e.target.value }))} />
                    </div>
                    <div class="mb-0">
                        <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" required value={create["confirmPassword"]} 
                            onChange={(e) => setCreate(p => ({ ...p, confirmPassword: e.target.value }))} />
                    </div>
                    <br></br>
                    <button id='wid' type="login" class="btn btn-danger" onClick={login} >Create Password</button>
                    <hr></hr>
                    <p id='acc'>Already have an account ?</p>

                    <p id='sign' onClick={() => dispatch({ type: 'Signupopen' })}>SignUp</p>

                </div>
            </form>
        </div>
    )
}

export default CreatePassword
