import React from 'react'
import css from './index.module.css'
function DropDown() {
  return (
      <div className={css.wrapper}>
    <div className={css.dropdown}>
        <label>Profesional que realiza primer visita:
        <select name="Profesional que realiza primer visita">
            <option value='Laura'>Laura</option>
            <option value='Eva'>Eva</option>
        </select>
        </label>
    </div>
    </div>
  )
}

export default DropDown;