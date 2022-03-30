import React,{useEffect, useState} from 'react'

const url = 'https://api.github.com/users/QuincyLarson';

export default function Multipleeffrct() {
    const [isLoding ,setIsloding] = useState(true)
    const [isError ,setError] = useState(false)
    const [user ,setUser] = useState('defolt user')

    useEffect(()=>{
     fetch(url)
     .then((resp) =>{
        if(resp.status=== 200 && resp.status <=299){
 return(
     resp.json()
 )
        }else{
            setIsloding(false)
            setIsloding(true)
             
        }
     })
    },[])
  return (
    <div className='continer'>
       <h1> Multiple effrct</h1>
        
        </div>
  )
}
