import React from 'react'
import {useState} from '../reducers/reducer'

export const useForm = (initailValue) => {
    const [values, setValues] = useState(initailValue)
    const [todoText, setTodoText] = useState('')
}