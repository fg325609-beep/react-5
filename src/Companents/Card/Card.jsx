import React from 'react'
import  'Card.scss'

const Card = () => {
   
  return (
    <div>
        <form onSubmit={senMesage} action="" method="post">
            <label htmlFor="">ismingizni kirirting</label>
            <input type="text" id='text' placeholder='ismingizni kirirting' />
            <br />
            <label htmlFor="">telefon raqamingizni kirirting</label>
            <input type="number" id='number' placeholder='raqamingizni kirirting' />
            <br />
            <button type='submit'>jonatish</button>
        </form>
    </div>
  )
}

export default Card;