import React from 'react'
import { TLargeTextBoxProps } from './index.definition'
import css from './index.module.css'

function LargeTextBox({text}: TLargeTextBoxProps) {
  return (
    <div >
      <textarea className={css.largetextbox}>{text}</textarea>
      </div>
  )
}

export default LargeTextBox