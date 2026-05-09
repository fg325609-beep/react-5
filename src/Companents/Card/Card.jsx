import React from 'react'

const Card = () => {
   
  return (
    <div>
        <form onSubmit={senMesage} action="" method="post">
            <label htmlFor="">ismingizni kirirting</label>
            <input type="text" id='text' placeholder='ismingizni kirirting' />
            <br />
            <label htmlFor="">telefon raqamingizni kirirting</label>
            <input type="number" id='number' placeholder='raqamingizni kirirting' />
            <button type='submit'>jonatish</button>
        </form>
    </div>
  )
}

export default Card