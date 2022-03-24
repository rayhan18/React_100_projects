import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import Data from '../Reminder/Data'

export default function Hookarray() {
 
    const [people ,setPeople] = useState(Data)

  const removeItem =(id)=>{
     let newpeople = people.filter((persion)=> persion.id !== id)
  
     setPeople(newpeople)
     console.log(newpeople ,'djdsDG')
  }


  return (
    <div className='container'>
        <h2>Remove item</h2>
       {people.map((person) => {
        const { id, name,image } = person;
        return (
          <div key={id} className='border'>
            <h4>{name}</h4>
            <img style={{width:'100px'}} src={image}/>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </div>
  )
}
