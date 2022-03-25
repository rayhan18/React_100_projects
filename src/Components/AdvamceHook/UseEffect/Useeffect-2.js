import React,{useEffect, useState} from 'react'

export default function Useeffect2() {
    const [size ,setSize] = useState(window.innerWidth)

    const chackSize=()=>{
        setSize(window.innerWidth)
    }
    useEffect(()=>{
      console.log('resize')
      window.addEventListener('resize',chackSize)
      console.log('remove size')
      window.removeEventListener('remove' ,chackSize)
    },[])
  return (
    <div className='container text-center bg-warning'><hr/>
        <h2>Useeffect-2 clenup</h2>
        <p>chack your window --'inspact mobile view'-- </p>
          <h1 className='text-primary '> your window size = {size} px</h1>
          <hr/>
        </div>
  )
}
