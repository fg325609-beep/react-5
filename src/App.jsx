import React from 'react';
import axios from 'axios'; 
import './App.scss';
const App = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    const token = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0";
    const chat_id = 6660879147;
    const url = `https://api.telegram.org/bot${token}/sendMessage`; 

    const name = document.getElementById("text").value;
    const phone = document.getElementById("number").value;
    const messageContent = `Ism: ${name}\nTelefon: ${phone}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      }
    })
    .then(() => {
      alert("Xabar yuborildi");
    })
    .catch((err) => {  
      console.log(err);
    });
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <label>Ismingizni kiriting</label>
        <input type="text" id="text" placeholder="ismingizni kiriting" />
        <br />
        <label>Telefon raqamingizni kiriting</label>
        <input type="tel" id="number" placeholder="raqamingizni kiriting" />
        <br />
        <button type="submit">Jonatish</button>
      </form>
    </div>
  );
};

export default App;