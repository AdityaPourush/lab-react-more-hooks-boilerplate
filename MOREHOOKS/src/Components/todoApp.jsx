import React, { useRef } from 'react'
import { useReducer } from 'react';
import TodoItem from './todoItem';

const todoReducer = (state, action)=>{
    if(action.type=="ADD_ITEM"){
        return [
            ...state, {
                data: action.payload,
                isHidden: false
            }
        ]
    }
    if(action.type == "CHANGE_ISHIDDEN"){
        return state.map((e,i)=>{
            return i == action.payload ? {...e, isHidden: !e.isHidden} : e
        })
    }

    return state;
}

const initialState = [
    {
        data: "First Item...",
        isHidden: false
    }
]

const TodoApp = ()=>{

    const [todo, dispatch] = useReducer(todoReducer, initialState)
    console.log('todo :', todo);

    const input = useRef(null)

    return(
        <>
            <input type="text" ref={input} onKeyDown={(e)=>{
                if(e.key == "Enter"){
                    dispatch({type: "ADD_ITEM", payload:e.target.value})
                }
            }}/>

            {todo.map((e,i)=>{
                return(
                    <TodoItem item={e} index={i} dispatch={dispatch} />
                )
            })}

            <button onClick={()=>{
                window.scrollTo({top:0, behavior:"smooth"})
                input.current.focus()
            }}>Go to top</button>
        </>
    )
}

export default TodoApp;