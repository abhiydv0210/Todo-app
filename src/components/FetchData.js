import React, { useEffect, useState } from "react";
import { userContext } from '../App';


function FetchData() { 
  const [user, setUser] = useState([]);
  const setContext = useContext(userContext)

  const { dispatch } = setContext

  const fetchData = () => {
    return fetch()
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  
if (err=== 0){
  let data ={
    firstname,lastname,email,password,confirm_password
  };
  const mypost =(res,error)=>{
    if (error){
      dispatch({type:"LoaderOpen"});
      dispatch({Type:"ToastOpen",text:error});
      
    }
    if (res){
      dispatch({type:"SignUpClose"});
      dispatch({Type:"LoaderOpen"});
      dispatch({type:"ToastOpen",text:res.message});
  }
};
LoginAPI('user/register' ,"POST", data,mypost);
  return (
    
      <h1>User List</h1>
      
   
  );
}
export default FetchData;
