import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

export const Counter = () => {
    const [value,setValue] = useState(0)
const [complexval ,setComplexval] = useState(0)
    const increment=()=>{
        setValue(value + 1)
    }
    const decrement=()=>{
        setValue(value -1)
    }
    const reset=()=>{
        setValue( 0)
    }
    const complex=()=>{
        setTimeout(()=>{
            setComplexval(complexval + 1)
        },2000)
    }
  return (
        <div className="container">
          <h1> complex usestate  Counter</h1>
          <h1>{value}</h1>
          <Button className="mx-3" onClick={increment}>increment</Button>
          <Button className="mx-3" onClick={decrement}>decrement</Button>
          <Button className="mx-3" onClick={reset}>reset</Button>
          <h1> set time 2 secoun <span className='text-danger'>{complexval} </span></h1>
          <Button className="mx-3" onClick={complex}>complex</Button>
          <hr/>
        </div>
  )
}
