import { useState } from "react"

const Todo = ()=>{
    const[todo , setTodo] = useState([])
    const[inputValue , setInputValue] = useState('')

    function handleInputValue(event){
        setInputValue(event.target.value)
        console.log(inputValue)
    }
//    setTodo({[...todo , "hello there"]})
// const newTodo = 
    function AddTodo(event){
        setTodo([...todo , inputValue] )
        console.log(todo)
        setInputValue()

    }
    return(
        <div>
            
            <input type="text" name="todo" onChange={handleInputValue} className="text" />
            <button onClick={AddTodo}>Add todo</button>

            {todo.map((todos , index)=>(<ul>
                <li key = {index}>{index} {todos}</li>
            </ul>))}
        </div>
    )
}

export default Todo