import React from 'react'
import css from './index.module.css'

function UserName({user}) {
  return (
    <button className={css.username}>Hola {user}!</button>
  )
}

export default UserName