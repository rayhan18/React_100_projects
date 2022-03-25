import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

export default function BasicUseeffect() {
 
    const [value, setValue] = useState(0);

    useEffect(()=>{
        console.log('useeffect')
        if(value >0){
            document.title =`document count${value}`
        }
    })
  return (
    <div className='container text-center'>
        <h1>basic Useeffect</h1>
        <h1> seen the brouser tab click{value}</h1>
        <Button onClick={()=>setValue(value +1)}> cleck me</Button>
    </div>
  )
}
