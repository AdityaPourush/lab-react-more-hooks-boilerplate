import React, { useEffect, useRef, useState } from 'react'

const UseRef = ()=>{

    // let[count, setCount] = useState(0)

    let count = useRef(0)

    

    useEffect(()=>{
        // setCount(count+1)
        count.current = count.current+1;
    },)

    return(
        <>
            <h2>No of re-renders: {count.current}</h2>
        </>
    )
}

export default UseRef;