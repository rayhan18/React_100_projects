import React, { useEffect, useState } from 'react'
import Loding from '../TurePakeg/Loding'
import TourList from './TourList'

const url = 'https://course-api.com/react-tours-project'

export default function TurePagkeg() {

    const [loding ,setLoding] =useState(true)
    const [ture, setTure] = useState([])

    const removeTure=(id)=>{
        const newTure =ture.filter((ture) => ture.id !==id)
        setTure(newTure)
       
    }
    const fatchTour = async()=>{
        setLoding(true)
        try{
            const response = await fetch(url)
            const tours = await response.json()
          //  console.log(tours)
            setLoding(false)
            setTure(tours)
        }catch (error){
            setLoding(false)
            console.log(error)
        }
    }
    useEffect(()=>{
        fatchTour()
    },[])
    if (loding) {
        return (
          <main>
            <Loding />
          </main>
        )
      }
      if(ture === 0){
        return(
            <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fatchTour()}>
            refresh
          </button>
        </div>
      </main>
        )
      }
  return (
    <>
     <main>
      <TourList tours={ture} removeTour={removeTure} />
    </main>

    </>
  )
}