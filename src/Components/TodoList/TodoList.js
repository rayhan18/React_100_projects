import React,{useEffect, useState} from 'react'
import { Button, Container, Row,Modal,Form } from 'react-bootstrap'
import Modals from './Modals';
import TodoCard from './TodoCard';

export default function TodoList() {
  const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
 
 useEffect(()=>{
  const items = JSON.parse(localStorage.getItem('items'));
    setTaskList(items)
 },[])
  
 const toggle=()=>{
  setModal(!modal)
 }

  const saveTaskList =(taskObj)=>{
     let temp = taskList
     temp.push(taskObj)
     localStorage.setItem('items', JSON.stringify(temp));
     setTaskList(temp)
     setModal(false)
     console.log(temp)
  }

const deleteTask=(index)=>{
  let templist = taskList
  templist.splice(index , 1)
  localStorage.setItem('items', JSON.stringify(templist));
  setTaskList(templist)
  window.location.reload()

}
const updateArray=(index ,obj)=>{
  let tampup = taskList
  tampup[index] = obj
  localStorage.setItem('items', JSON.stringify(tampup));
  setTaskList(tampup)
  window.location.reload()
}
  return (
    <>
    <Container >
        <Row className='text-center'>
        <h2>Todo List</h2>
        <Button  onClick={()=> setModal(true)} className="w-25 mx-auto">Creat task</Button>


        <div className='task-item'>
           
           {
            taskList.map((obj , index)=> <TodoCard taskObj={obj} index={index}
            deleteTask={deleteTask} updateArray={updateArray}/>)
           }
          </div>
        </Row>
         <Modals modal={modal} toggle={toggle} save={saveTaskList}/>
    </Container>
    
    </>
  )
}
