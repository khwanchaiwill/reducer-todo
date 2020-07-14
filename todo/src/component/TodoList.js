import React, { useReducer, useState } from 'react'
import {reducer, initailState} from '../reducers/reducer'
import TodoForm from './TodoForm'

const TodoList = () =>{
const [state, dispatch] = useReducer(reducer, initailState)
    const [todoText, setTodoText] = useState('')
  
    const handleChange = e => {
        setTodoText(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload:todoText })
        setTodoText("")
    }
    const toggleList = id => {
       dispatch({type: "TOGGLE_TODOLIST", payload: id})
    }
    const clearComplete = () => {
        dispatch({type: 'CLEAR_COMPLETED'})
    }
 
    return (
        <div className="todoform-display">
            <TodoForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            clearComplete={clearComplete}
            />
            <div className="todolist-display">
                {
                  state.map(todo =>
                    <div 
                        key={todo.id} className="list">
                        <p 
                        onClick={()=> toggleList(todo.id)}                            
                        > {todo.item} </p>
                    </div>   
                    )
                }
            </div>
        </div>
    )
}
export default TodoList;






