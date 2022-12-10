import React,{useState} from 'react';
import './Like.css';

export default function Myname(){
  const [like1,num1]=useState(0)
  // const [dislike,num2]=useState(0)

  return(
    <div id="box">
     <center> <h1>{like1}</h1></center>
    <button id='likeb' onClick={()=>{
      num1(like1+1)
    }}>LIKE</button>
      {/* <h1>{like1}</h1> */}
    <button id="disb" onClick={()=>{
      if(like1>0)
        num1(like1-1)


    }}>DISLIKE</button>
    </div>

  )
}
