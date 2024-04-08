import React from "react";

const TodoItem = ({item: {data, isHidden}, index, dispatch})=>{
    return(
        <>
            <div style={{
                backgroundColor: "purple",
                width: "90vw"
            }}>
                <h3>{isHidden?"This Content is Hidden": `${index+1}. ${data}`}</h3>
                <button onClick={()=>{
                    dispatch({type:"CHANGE_ISHIDDEN", payload:index})
                }}>Toggl</button>
            </div>
        </>
    )
}

export default TodoItem;