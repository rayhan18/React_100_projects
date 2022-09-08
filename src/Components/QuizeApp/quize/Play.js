import { counter } from '@fortawesome/fontawesome-svg-core'
import React, { Component, Fragment } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import { AiOutlinePicRight,AiOutlineClockCircle ,AiFillStepBackward,AiFillStepForward} from "react-icons/ai";
import { MdLightMode} from "react-icons/md";
import Quize from '../Quize.json';
import isEmpty from '../quize/isEmpty'
import click from '../../../Assets/adio/click.mp3'
import wrong from '../../../Assets/adio/dorball.mp3'
import alertbell from '../../../Assets/adio/alertbell.mp3'

export default class Play extends Component {
    constructor(){
        super()
        this.state={
           questions:Quize,
           curentQuestion:{},
           nextQuestion:{},
           prevQuestion:{},
           answer:'',
           numberOfQuestion:0,
           numberofAnsQuestions:0,
          curentQuestionIndex:0,
          score:0,
          curectAnswer:0,
          wronganswer:0,
          hints:5,
          fiftyFifty:2,
          useFiftyFifty:false,
          prevRandomNumbers:[],
          time:{},
         

        }
    }
    componentDidMount(){
      const {questions,curentQuestion,nextQuestion,prevQuestion} = this.state
      this.displayQuestion(questions,curentQuestion,nextQuestion,prevQuestion)
    }

 displayQuestion=(nextQuestion,prevQuestion,Answer)=>{
  let{curentQuestionIndex ,questions,curentQuestion,answer}=this.state
  if(!isEmpty(questions)){
    questions= this.state.questions
    curentQuestion= questions[curentQuestionIndex]
    nextQuestion = questions[curentQuestionIndex +1]
    prevQuestion = questions[curentQuestionIndex -1]
    const answar =curentQuestion.answar
    this.setState({
      curentQuestion,
      nextQuestion,
      prevQuestion,
      numberOfQuestion:questions.length,
      answar:answar,
      prevRandomNumbers:[]
    },()=>{
      this.showoptions()
    })

  }
  console.log(this.state.answar ,'ans')
}

handelOptionClick=(e)=>{
 if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
  setTimeout(()=>{
    document.getElementById('write-ans').play()
  },500)
 
  this.carectAnswer()
 }else{
  setTimeout(()=>{
    document.getElementById('wrong-ans').play()
  },500)
  
  this.wrongAnswer()
 }
}

carectAnswer=()=>{
  alert("carect Answer")
  this.setState(prevState=>({
     score: prevState.score +1,
     curectAnswer: prevState.curectAnswer + 1,
     curentQuestionIndex: prevState.curentQuestionIndex +1,
     numberofAnsQuestion: prevState.numberofAnsQuestions + 1
    
  }),()=>{
   this.displayQuestion(this.state.questions,this.state.prevQuestion,this.state.nextQuestion,this.state.curentQuestion)
  })
  //console.log(curentQuestionIndex ,'ca')
}

wrongAnswer=()=>{
  alert("worng Answer")
  this.setState(prevState=>({
    wronganswer: prevState.wronganswer +1,
     curentQuestionIndex: prevState.curentQuestionIndex +1,
     numberofAnsQuestion: prevState.numberofAnsQuestions +1
  }),() =>{
    this.displayQuestion(this.state.questions,this.state.prevQuestion,this.state.nextQuestion,this.state.curentQuestion)
  })
}
nextBtnClick=()=>{
// let {curentQuestionIndex} =this.state
  this.hendelbtnClick()
  if(this.state.nextQuestion !== undefined){
    this.setState(preveusState =>({
      curentQuestionIndex:preveusState.curentQuestionIndex +1
    }),()=>{
      this.displayQuestion(this.state.state,this.state.curentQuestion,this.state.nextQuestion,this.state.prevQuestion)
    })
  }
}

preveusBtnClick=()=>{
  // let {curentQuestionIndex} =this.state
    this.hendelbtnClick()
    if(this.state.prevQuestion !== undefined){
      this.setState(preveusState =>({
        curentQuestionIndex:preveusState.curentQuestionIndex  -1
      }),()=>{
        this.displayQuestion(this.state.state,this.state.curentQuestion,this.state.nextQuestion,this.state.prevQuestion)
      })
    }
  }
  handelQuitMethod=()=>{
   
if(window.confirm('Are your sure want to quite')){
  this.props.history.push('/')
}
  }

   showoptions =()=>{
      const options =Array.from(document.querySelectorAll('.option'))
      options.forEach((optionItem)=>{
        optionItem.style.visibility = 'visibal'
      })
  }

  HandelHints=()=>{
    if(this.state.hints > 0){
      //console.log('fifty')
      const options = Array.from(document.querySelectorAll('.option'))
      //console.log(options)
      let indexOfAnswer;
      options.forEach((Item ,index)=>{
        if(Item.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
          indexOfAnswer = index
        }
      })
      while(true){
        const rendomNumber = Math.round(Math.random() * 3)
        if(rendomNumber !== indexOfAnswer && !this.state.prevRandomNumbers.includes(rendomNumber)){
          options.forEach((option ,index)=>{
             if(index === rendomNumber){
              option.style.visibility = 'hidden'
              this.setState((prevState)=>({
                hints: prevState.hints - 1,
                prevRandomNumbers: prevState.prevRandomNumbers.concat(rendomNumber)
  
              }))
             }
          })
          break;
        }
       if(this.state.prevRandomNumbers.length >= 3)break;
      }
    }
    
  }

  handelfiftyFifty=()=>{
    //alert('hello fifty')
    if(this.state.fiftyFifty > 0 && this.state.useFiftyFifty === false){
      const option = document.querySelectorAll('.option')
      const rendomNumbers= []
      let indexOfAnswer;
      option.forEach((item ,index)=>{
       if( item.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
          indexOfAnswer = index
       }
      })
    }
  }
hendelbtnClick=(e)=>{
  switch(e.target.id){
    case 'next-button':
    this.nextBtnClick()
    break;
    case 'prev-button':
      this.preveusBtnClick()
      break;
      case 'quit-button':
        this.handelQuitMethod()
        break;
    default:
      break;
  }
 // this.playBtnSound()
}
playBtnSound=()=>{
  document.getElementById('playBtn').play()
}
  render() {
    
  const {curentQuestion ,curentQuestionIndex ,numberOfQuestion}=this.state
    return (
      <>
      <Container className='mt-5 w-50'>
      <Helmet><title>Question</title></Helmet>
      <Fragment>
        {/* <audio controls src={click}></audio> */}
        <audio id="write-ans" src={click}></audio>
        <audio id="wrong-ans" src={wrong}></audio>
        <audio  id="playBtn" src={alertbell}></audio>
      </Fragment>
           <div  className='d-flex justify-content-between bg-light p-3'>
              <div>
                <p onClick={this.handelfiftyFifty}><AiOutlinePicRight/>2</p>
                <p>{curentQuestionIndex +1} to {numberOfQuestion}</p>
                
              </div>
                <h3 className='mt-5'>{curentQuestion.question}</h3>
              <div className='float-end'>
                <p onClick={this.HandelHints}><MdLightMode />{this.state.hints}</p>
                <p><AiOutlineClockCircle/>2:33</p>
              </div>
           </div>
           <div className='mt-4 text-center border'>
           <Button onClick={this.handelOptionClick} style={{width:"200px"}} className='option mx-1 my-3'>{curentQuestion.optionA}</Button>
             <Button onClick={this.handelOptionClick} style={{width:"200px"}} className=' option mx-1 my-3'>  {curentQuestion.optionB}</Button>
             <Button onClick={this.handelOptionClick} style={{width:"200px"}}className='option mx-1 my-3'>  {curentQuestion.optionC}</Button>
             <Button onClick={this.handelOptionClick} style={{width:"200px"}} className='option mx-1 my-3'>  {curentQuestion.optionD}</Button>
             
           </div>
            <div className='mt-5'>
                <Button id="prev-button" onClick={this.hendelbtnClick}><AiFillStepBackward/>Previus</Button>
                <Button id="next-button" onClick={this.hendelbtnClick} variant='warning mx-5'>Next <AiFillStepForward/></Button>
                <Button id="quit-button" onClick={this.hendelbtnClick} variant='danger'>Quit</Button>
            </div>
      </Container>
      </>
    )
  }
}
