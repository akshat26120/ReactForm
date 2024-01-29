import React, { useEffect, useState } from 'react'

const ButtonComponent = () => {
    // useEffect('Value started from 0')
    const [count , setCount] = useState(0)
    const handleAddClick = () => {
        setCount(count + 1 )
    }
    const handlesubClick = () => {
        setCount(count - 1)
    }
  return (
    <>
        <div className='BTN' >
      <button onClick={handleAddClick }  ><b>Press to Add</b></button>
      <button onClick={handlesubClick}><b>Press to sub</b></button>
      </div>
      <p><b>Print: {count}</b></p>
    </>
  )
}

export default ButtonComponent
