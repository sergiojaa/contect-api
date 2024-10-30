import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../App'
export default function GrandChild() {
    const {counter} = useContext(counterContext)

  return (  
    <div>
      {counter}
    </div>
  )
}
