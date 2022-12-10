// 4.TodoList

import React,{useState} from 'react';
import './Todo.css';


function App(){
  const [todo,setTodo]=useState("")
  const[allTodos,setAllTodos]=useState([])

  return(
    <div >
      <table>
      <h1>TODOLIST</h1>
      <input id="todo1" type="text" placeholder="Enter a todo"  onChange={(event1)=>{
        setTodo(event1.target.value)
      }}/>
    <button id="todo"  onClick={()=>{
      if(todo.length>0){
        setAllTodos([...allTodos,todo])
      }
    }}>Add Todo</button>
    {
      allTodos.map((item,index)=>{
        return(
          <div>
            <h3>{item}</h3>
            <button id="del" onClick ={()=>{
              let newdata=[...allTodos]
              newdata.splice(index,1);
              setAllTodos(newdata)
            }}>Delete</button>

              <button id="edit" onClick ={()=>{
              let newdata=[...allTodos]
              const newarr=prompt("Enter the content")
              if(newarr.trim().length>0){
                newdata[index]=newarr

                setAllTodos(newdata)
            }
          }}>Edit</button>

              <button id="complete" onClick ={()=>{
              let newdata=[...allTodos]
              newdata[index]=<del>{newdata[index]}</del>
              setAllTodos(newdata)
              }}>Complete</button>

          </div>
        )
      })
    }
    </table>
    </div>
  )
}
export default App

