import React from 'react'
import css from './index.module.css'

function BooleanDropdown({label, onChange, value, handleChange, content }) {
  return (
<div className={css.wrapper}>
      <div className={css.dropdown}>
        <label htmlFor="Boolean">{label} </label>
        <select
          name="Boolean"
          className={css.dropDownBox}
          onChange={onChange}
          value={value}
        >
          <option value="false">No</option>
          <option value="true">Si</option>
          
        </select>
      </div>
 
      <textarea
        name="largeTextBox"
        placeholder='Si selecciona si, mas informacion...'
        className={css.textArea}
        onChange={handleChange}
        value={content}
      ></textarea>
    </div>
  )
}

export default BooleanDropdown