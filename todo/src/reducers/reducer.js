

export const initailState = [
    {
    item: 'Learn about reducer',
    completed: false,
    id: Date.now()
    },
]

export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
return [...state, 
    {
        item: action.payload, 
        completed: false, id: 
        Date.now()}
    ]

        case 'TOGGLE_TODOLIST':
            return  state.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }else 
                    return todo;
                
            })

        case 'CLEAR_COMPLETED' : 
        return state.filter(clear =>
         clear.completed === false
        )
        
        default:
            return state;
    }
}

