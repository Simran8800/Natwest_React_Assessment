// 4. Table


import React,{ useState } from 'react'

function App(){
  const [todo,setTodo]=useState(0)
  const [allTodos,setAllTodos]=useState([])
  const loopElement=()=>{
    let newlist=[]
    for(let i=1; i<=10;i++){
      newlist.push(`${todo} X ${i}=${todo*i}`)
      console.log(newlist);
  }
  setAllTodos(newlist)
  console.log(allTodos)
}
  return (
    <div> 
      <input type="number" placeholder='Enter a Number' onChange={(e)=>{
        setTodo(e.target.value)
      }}/>
     <button onClick={loopElement}>Click</button>
      {
      allTodos.map((item,index)=>{
        return(
          <div>
            <h4>{item}</h4>
          </div>
        )
      })
    }
    </div>
  )
  }
export default App



