import React from 'react'

const ArrayComponent = () => {

    const item = ['item 1','item 2','item 3']
  return (
    <>
    <ol>
      {item.map((item, index)=>(
        <li key={index}>{item}</li>
      ))

      }
    </ol>
    </>
  )
}

export default ArrayComponent
