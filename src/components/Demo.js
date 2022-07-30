import React, {useState}from 'react'

function Demo() {
    const [count,setCount]=useState(0)





  return (
    <div>

        <hi>This is my counter value{count}</hi>
        <button> onClick={()=> setCount(count + 1)}+</button>
        <button onClick={()=> setCount(count - 1)}>-</button>
    </div>
  )
}

export default Demo