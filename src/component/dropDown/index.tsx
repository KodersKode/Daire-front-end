import React from 'react'
import css from './index.module.css'
function DropDown({label}) {
  return (
      <div className={css.wrapper}>
    <div className={css.dropdown}>
        <label htmlFor="Profesional">{label} </label>
        <select name="Profesional" className={css.dropDownBox}>
            <option value='Laura'>Laura</option>
            <option value='Eva'>Eva</option>
        </select>
      
    </div>
    </div>
  )
}

export default DropDown;