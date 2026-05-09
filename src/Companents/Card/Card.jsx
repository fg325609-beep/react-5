import React from 'react'

const Card = () => {
  return (
    <div>
        <form action="" method="post">
            <label htmlFor="">ismingizni kirirting</label>
            <input type="text" placeholder='ismingizni kirirting' />
            <label htmlFor="">telefon raqamingizni kirirting</label>
            <input type="number" placeholder='raqamingizni kirirting' />
            <button type='submit'>jonatish</button>
        </form>
    </div>
  )
}

export default Card