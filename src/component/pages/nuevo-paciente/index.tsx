import React from "react";
import SmallTextBox from "../../smallTextBox";
import {useState} from 'react'

function NuevoPaciente() {

  const[value, setValue] = useState('')

  function handleChange(e){
    setValue(e.target.value)
  }
  return (
    <form>
      <SmallTextBox label="First name"  value={value} handleChange={handleChange}/>
    </form>
  );
}

export default NuevoPaciente;
