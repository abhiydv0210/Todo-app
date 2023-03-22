import React, { useContext,useState } from 'react';

import { userContext } from '../App';
import Style from '../components/Tags.module.css'
import useFetchAPI from './FetchAPI';

const Tags = () => {
  const setContext = useContext(userContext)
  const selectedButton = setContext.selectedTags;
  const [tags, setTags] = useState({})
  const api = useFetchAPI();
  
  const validate = (data) =>{
    if(!tags["tags"] )
    return false;
    
    

    return true ; 
  }
  const Tags = () => {
    console.log(tags,"---")
    const result = validate(tags)
    console.log("adsfasfs")
    if(!result){
      alert("please fill all the filed correctly")
      return
    }
    api("user/login", "POST", tags, (res, error)=>{
      if(error){
        alert(error)
        console.log(error, "error from api")
      }else{
       
        console.log(res, "---->")
      }
    })
    }

  // console.log(setContext.selectedTags, '+++.')
console.log(selectedButton,setContext,"selected")
  return (
    <>
      <p id={Style["space"]}>Tags</p>
      <div className={Style["color"]}>
        {/* <div id={Style["yellow"]} className={Style["dot"]}><span id={Style["span1"]}></span>Work</div>
        <div id={Style["green"]} className={Style["dot"]}><span id={Style["span2"]}></span>Study</div>
        <div id={Style["blue"]} className={Style["dot"]}><span id={Style["span3"]}></span>Environment</div>
        <div id={Style["red"]} className={Style["dot"]}><span id={Style["span4"]}></span>Family</div> */}

        {
          setContext.tags.map(tag => <><div id={Style[`buttonColor-${tag.id}`]}
            className={setContext.selectedTagIds.includes(tag.id) ? ` border ${Style["dot"]}` : `${Style["dot"]}`}
            onClick={() => setContext.dispatch({ type: "selectTag", data: tag })}
          >
            <span id={Style[`span${tag.id}`]} onClick={Tags}></span>{tag.label}</div></>
          )
        }

        
      </div>
    </>
  )
}

export default Tags
