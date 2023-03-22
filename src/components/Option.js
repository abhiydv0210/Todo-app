import React,{useContext,useState} from 'react';
import { userContext } from '../App';
import useFetchAPI from './FetchAPI';
import './Option.css';


const Option = ({id}) => {
    const setContext =useContext(userContext)
    const{dispatch} =setContext;
    // const [del,setDel] = useState({})
    const api = useFetchAPI();


    const Deleted = () => {
        let data ={_id:id}
        
        api("user/deleteTodo", "DELETE",data, (res, error)=>{
          if(error){
            alert(error)
            console.log(error, "error from api")
          }if(res){
            dispatch({ type: "optiondelete", id })
            console.log(res, "---->")
          }
        })
       
    
        
      }
    
    // console.log(id,"hey i m option")
    return (
        <div className='e2' >
      
      
        <div className='e1' style={{ position: "absolute"}}>
            <button id="t1"  className='btn btn-light' onClick={()=>dispatch({type:'optionedit',id})}>Edit...</button>
            <button id="t2" className='btn btn-light' onClick={Deleted}>Delete</button>
        </div>
        

      </div>

      
       
    )
}

export default Option
