import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

export default function Toggole() {
    const {text ,setText} =useState('')
    const {isError, setIserror} = useState(false)
  return (
    <div>
        <h3>Toggole button</h3>
        <h3>{text || 'Rayhan Molla'}</h3>
      <Button onClick={()=> setIserror(!isError)}>Toggole</Button>

{isError && <h3>isError ....</h3>}
{isError ? (
    <h3> ooh heaar is error ....</h3>
):(
    <h3> good hear is not error </h3>
)}
    </div>
  )
}
