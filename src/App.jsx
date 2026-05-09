import React from 'react'
import Card from './Companents/Card/Card'
import { Axios } from 'axios';

const App = () => {
     const senMesage = (event)=>{
     event.preventDefault();
     const token = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0"
     const chat_id = 6660879147
     const url = `https//api.telegram.org/bot${token}/senMesage`
     const name = document.getElementById("text").value
     const phone = document.getElementById("number").value

     const messageContent = `Ism : ${name}\n${phone}`;
     
     axios({
       url:url,
       method:"POST",
       data:{
        chat_id: chat_id,
        text:messageContent,

       }
     })
     .then(()=>{
        alert("ketdi")
     }
    ).catch(()=>{
        console.log(err);
        
    })
    }
  return (
    <div>
   <Card/>
    </div>
  )
}

export default App