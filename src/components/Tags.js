import React, { useContext } from 'react';

import { userContext } from '../App';
import Style from '../components/Tags.module.css'


const Tags = () => {
  const setContext = useContext(userContext);
  const { dispatch } = setContext;
  const selectedButton = setContext.selectedTags;
  
  

  console.log(setContext.selectedTags, '+++++++++++++++.')
console.log(selectedButton,setContext,"selected")
  return (
    <>
      <p id={Style["space"]}>Tags</p>
      <div className={Style["color"]}>
        {
          setContext.tags.map(tag => <><div id={Style[`buttonColor-${tag.id}`]}
            className={setContext.selectedTagIds.includes(tag.id) ? ` border ${Style["dot"]}` : `${Style["dot"]}`}
            onClick={()=>dispatch({ type: "selectTag", data: tag })}>
            <span id={Style[`span${tag.id}`]}></span>{tag.label}</div></>
          )
        }

        
      </div>
    </>
  )
}

export default Tags
