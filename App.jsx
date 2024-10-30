
import { useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import { createContext } from 'react'
export const counterContext = createContext( { counter: 0 } )
function App() {
  const [counter,setCounter] = useState(0)

  return (
    <>
    <button onClick={()=> setCounter(counter+1)} >increase</button>
    {/* vawvdit exla infos. gamokenaba aris use.es shekmna */}
    <counterContext.Provider value={ {counter: counter} }>
      <Parent/>
    </counterContext.Provider>
    
    </>
  )
}

export default App
