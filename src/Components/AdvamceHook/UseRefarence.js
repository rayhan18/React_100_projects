import React, { useRef, useState } from 'react'

export default function UseRefarence() {
    const useRefarencedata = useRef(null)
    console.log(useRefarencedata)
    const [name ,setName] = useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const val = useRefarencedata.current.value
        console.log(val)
        val === "" ? alert('pl input u name') :setName(true)
        
    }
  return (
    <div>Use Refarence
        <form onSubmit={handleSubmit}>
           <input type='text' ref={useRefarencedata}/>
          
           <button>submit</button>
        </form>
     
        <h2>  your name is <span style={{color:'red'}}>{name ?`  ${useRefarencedata.current.value}` : ""}</span></h2>
    </div>
  )
}
