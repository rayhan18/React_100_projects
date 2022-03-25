import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

export default function ObjUseState() {
    const [people ,setPeople] = useState({
        name:'Rayhan',
        msg:'programer'
    })
    const changemessage =()=>{
        setPeople({...people , msg:'Developar'})
        //like setPeople('developar')
    }
  return (
    <div className='container text-center'>
        <h1>ObjUse State usestate</h1>
        <h2>{people.name}</h2>
        <h2>{people.msg}</h2>
        <Button onClick={changemessage}> change message </Button>
        <hr/>
    </div>
  )
}
