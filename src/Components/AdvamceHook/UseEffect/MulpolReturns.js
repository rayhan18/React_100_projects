import React,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import Index from '../Reducer';
import UseRefarence from '../UseRefarence';
import ControlledInputs from './Controlled-inputs';
import Props from './Props';
import Toggole from './Toggole';


const url = 'https://api.github.com/users/QuincyLarson';
export default function MulpolReturns() {
    const [isLoding ,setIsLoding] = useState(true)
    const [isError ,setIserror] = useState(false)
    const [user ,setUser] = useState('default user')

    useEffect(()=>{
        fetch(url)
        .then((res) =>{
            if(res.status >= 200 && res.status <=300){
                return(
                    res.json()
                )
            }else{
                setIsLoding(false)
                setIserror(true)
                throw new Error(res.statusText)
            }
        })
        .then((user)=>{
            const {login} =user
                setUser(login)
                setIsLoding(false)

        }).catch(error=>{
            alert(error.message)
        })
    } ,[])
    if(isLoding){
        return(
            <h1>isLoding ....</h1>
        )
    }
    if(isError){
        <h1>isError ....</h1>
    }
  return (
    <div className='mt-5'>
        <Container>
       <h1>Multipol Returns</h1>
       <h3> Hear  wrong api provide then you see loding Component atherwige return true</h3>
       <h1>{user}</h1> <hr/>

       <Toggole/>
       <ControlledInputs/><hr/>
       <UseRefarence/><hr/>
       <Index/><hr/>
       <Props/><hr/>
       </Container>

    </div>
  )
}

