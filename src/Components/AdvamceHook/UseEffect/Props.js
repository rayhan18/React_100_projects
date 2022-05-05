import React, { useState } from 'react'
import Data from '../../Reminder/Data'

export default function Props() {
    const[pepole ,setPepole] = useState(Data)
    const removePepole =(id)=>{
        setPepole((pepole)=>{
           return pepole.filter((person)=> person.id !== id)
        })

        
    }
  return (

    <div>
      <h3>prop drilling</h3>
    <List pepole={pepole} removePepole={removePepole}/>
    </div>
  )
}
const List=({pepole,removePepole})=>{
 return(
     <div>
         {
             pepole.map((persone)=>{
                 return(
                    <singlePersion key={persone.id}
                    pepole={pepole}
                    {...persone} 
                    removePepole={removePepole}/>               
                
                
                 )
             })
         }
        
     </div>
 )
}
const singlePersion =({id,name, removePepole})=>{
    return(
        <div>
        <h2>{name}</h2>
        <button onClick={()=>removePepole(id)}>Delete</button>
        <br/><br/><br/>
        </div>
        
    )
}