import React from 'react'
import { TLargeTextBoxProps } from './index.definition'
import css from './index.module.css'

function LargeTextBox({text, onChange}: TLargeTextBoxProps) {
  return (
    <div >
      <textarea className={css.largetextbox} onChange={onChange}>{text}</textarea>
      </div>
  )
}

export default LargeTextBox