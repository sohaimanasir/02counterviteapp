import { useState } from 'react'
import './App.css';
import Header from './Header';
function App() {


  const [count, setCount]= useState(0);
  const Increment = () => {
    setCount (count+1)
  }
  const Decrement = () => {
    if(count>0){
      setCount(count-1)
    
  }
    else{
      alert('No Negative Value')
      
    }  
  }
  return (
    <>
    <Header/>
  <h1>Counter App</h1>
  <h2>Value of count is {count}</h2>


  <button
  onClick={Increment}
  >Increment</button>


  <button
  //disabled={count<=0? true:false}
  onClick={Decrement}
  >Decrement</button>


  <button
  onClick={()=> setCount(0)}
  >Reset</button>
    </>
  )
}

export default App
