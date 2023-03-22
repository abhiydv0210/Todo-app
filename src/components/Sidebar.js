import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../App'
import Tags from './Tags';
import Card from './Card';
import Navbar from './Navbar';

import "./Sidebar.css"
import LoginPage from './ LoginPage';
import SignUp from './SignUp';
import Password from './Password';
import useFetchAPI from './FetchAPI';



function Sidebar(Hidedone, id) {
  const setContext = useContext(userContext)
  const [option, setOption] = useState(-1)
  const { dispatch } = setContext
  console.log(setContext.Todos, "=====")
  const api = useFetchAPI();

  useEffect(() => {
    if (setContext.userLogin) {
      api("user/all-todo", "GET", null, (res, error) => {
        if (error) {
          alert(error)
          console.log(error, "error from api")
        }
        else {

          dispatch({ type: "setTodoFromAPI", todo: res.AllTodo })
          // localStorage.setItem("token", res.access_token)
          console.log(res.AllTodo , "----> res.AllTodo ")

        }
      })
    }
  }, [setContext.userLogin])


  return (


    <div className='inback' >
      <div >
        {setContext.Open && <><div className="back">

          <div className='app-wrapper '>
            <Navbar />
            <Tags />
          </div>
        </div>
        </>}
      </div>




      <div id="row" className='grid text-center fix '>
        <div className="g-row-3">
          <h3>todo</h3>
        </div>
        {/* <div className="g-row-6"><Card/></div> */}
        <div className='g-row-6'>

          {setContext.Todos.map((todo, i) => {
            console.log(todo,"===todo")
            return (todo.isDone && setContext.HideDonetask) ? <></> :
              <div key={i} className='row'>
                <Card isDone={todo.isDone} tags={todo.tags} title={todo.title} description={todo.description} id={todo._id} option={option} setOption={setOption} /></div>
          })}</div>


        <div className='g-row-3'><h1 onClick={() => dispatch({ type: 'Open' })} >+</h1>
        </div>


      </div>

      <div className='col-sm-3 list'>
        {/* <div id ='e2'> */}
        <div id='a1'>
          <div id='fcol1'></div><div>Work</div></div>
        <div id='a2'>
          <div id='fcol2'></div><div>Study</div></div>
        <div id='a3'>
          <div id='fcol3'></div><div>Environment</div></div>
        <div id='a4'>
          <div id='fcol4'></div><div>Family</div></div>
        <div id='a5'>
          <input id='fcol5' className='mt-5' type='checkbox' onClick={() => dispatch({ type: 'HideDonetask', id, Hidedone })} />
          <label className='ps-2'>Hide Done tasks </label>

          <div className='tonn'>
            {setContext.Loginpage ? (<button id='ton' type="button" class="btn btn-danger" onClick={() => dispatch({ type: 'Logout' })}>Logout</button>)
              : (<button id='ton' type="button" class="btn btn-danger" onClick={() => dispatch({ type: 'Loginpage' })}>Login</button>)


            }


          </div>

        </div>
        <div className='in'>
          {setContext.Loginpage &&

            <LoginPage />

          }
        </div>
        {setContext.Signuplogin &&

          <LoginPage />

        }
        {setContext.Signupopen &&
          <SignUp />}

        {setContext.Forgetpassword &&
          <Password />}
      </div>


    </div>









  )
}

export default Sidebar
