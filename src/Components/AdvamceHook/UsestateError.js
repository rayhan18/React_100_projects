import React from 'react'
import { Button } from 'react-bootstrap'

export default function UsestateError() {
    let title="error exampol"

    const hendelClick =()=>{
     title = "change title"
     console.log(title)
    }
  return (
    <div className='container text-center'>
  <h1 >{title}</h1>
  <p>Chack console</p>
  <Button onClick={hendelClick}> Change title</Button>
  <hr/>
    </div>
  )
}
