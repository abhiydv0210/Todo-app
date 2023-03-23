import React, { useContext, useState } from 'react';
import { userContext } from '../App';
import './Navbar.css';
import Style from '../components/Tags.module.css'
import useFetchAPI from './FetchAPI';

function Navbar({ id }) {
  const setContext = useContext(userContext)
  const { dispatch } = setContext
  // const [navbar, setNavBar] = useState({})
  const addapi = useFetchAPI();
  
  

  // const selectedButton = setContext.selectedTags;



  const addHandler = () => {
    let add={title: setContext.title, description:setContext.description}
    
    addapi("user/addTodo", "POST",add, (res, error)=>{
      if(error){
        alert(error)
        console.log(error, "error from api")
      }else{
       
        console.log(res, "---->")
      }
    })
    if (!setContext.title || !setContext.description) {
      alert("Please fill the data");
      return;
    }

    dispatch({ type: "Editadd", id })
  }



  
  const updateHandler = () => {
    // let update={title: setContext.title, description:setContext.description}

   
    // addapi("user/updateTodo", "PUT", update, (res, error)=>{
    //   if(error){
    //     alert(error)
    //     console.log(error, "error from api")
    //   }else{
        
    //     console.log(res, "---->")
    //   }
    // })
    // if (!setContext.title || !setContext.description) {
    //   alert("Please fill the data");
    //   return;
    // }

    dispatch({ type: "updatebutton", id })
  }

  return (
    <>

      <div>
        <div className='header row'>
          <div className='col-sm-2'>
            <button type="button" className="btn btn-light"  onClick={() => dispatch({ type: "Editclose" })}>cancel</button></div>
          <div className='col-sm-7'></div>
          <div className='col-sm-3'>
            {setContext.Editadd ? (

              <button type="button" className="btn btn-secondary" onClick={updateHandler}>
                Update</button>) : (
              <button type="button" id="widi" className="btn btn-secondary" onClick={addHandler}>
                Add</button>)}
          </div>
        </div>


      </div>
      <div className={Style["spacing"]}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" >Title</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="The first task Title" required  value={setContext.title} onChange={(e) => dispatch({ type: "title", id: e.target.value })} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Add Description Here' required  rows="4" value={setContext.description} onChange={(e) => dispatch({ type: "description", id: e.target.value })}></textarea>
        </div>

      </div>

    </>
  )
}
export default Navbar;
