import React from 'react'


  const TodoForm = props => {
   
    return(
        <div className="todo-form">
            <div className="form-input">
            <form onSubmit={props.handleSubmit} className="todo-form" id="todo-from" >
                <label> AddTodo List: </label>
                <input 
                    type="text"
                    name="item"
                    value={props.todoText}
                    onChange={props.handleChange}
                    placeholder="...Things todo"
                /> 
            <button onClick={props.handleSubmit}>Add Todo</button>
            <button onClick={props.clearComplete}>Clear Completed</button>
            </form>
            </div>
           
        </div>
    )
}
export default TodoForm;