
import React ,{useState} from 'react'

export default function Todo() {

    const[task,setTask]=useState('')
    const[taskArray , setArra]



  return (

    
    <div>
        <h1> Todo list app</h1>

        <input type="text"
        placeholder='Add an item' onChange={(e)=>setTask(e.target.value)}
        
        />
        <button>Add task</button>
        


    </div>


  )
}
