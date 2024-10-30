import React from 'react'
import Child from './Child'
import { useContext } from 'react'
import { counterContext } from '../App'
function Parent() {
    // use contextisfrchxilshi imas vwert risi gamokenebac gvinda
    // anu counter contextis, rashic gavaxvie countercontext
    const myContext = useContext(counterContext)
    console.log(myContext)
  return (
    <div>
      <Child />
    </div>
  )
}

export default Parent
