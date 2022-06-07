import React from 'react';
import  css from './index.module.css'

function NavButton({name}) {
  return (
      <div>
    <button className={css.navButton}>{name}</button>
    </div>
  )
}

export default NavButton

