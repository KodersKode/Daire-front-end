import React from "react";
import {TSmallTextBoxProps} from './index.definition'
import css from './index.module.css'

function SmallTextBox({ label, value, handleChange}:  TSmallTextBoxProps) {
  return (
    <div>
      <label>{label}</label>
      <input type="text"
      value={value}
      onChange = {handleChange}
      className={css.smallTextBox}
       />
    </div>
  );
}

export default SmallTextBox;
