import React from 'react'
import logo from '../../Assets/logo-daire.png'
import css from './index.module.css'

function Logo() {
  return (
    <img src={logo} alt='logo' className={css.logo} />
  )
}

export default Logo