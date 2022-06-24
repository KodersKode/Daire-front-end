import React from "react";
import SmallTextBox from "../../smallTextBox";
import { useState } from "react";
import css from './index.module.css'

function NuevoPaciente() {
  const [nombre, setNombre] = useState(""); //firstName
  const [apellido, setApellido] = useState('') //lastName

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNombre(e.target.value);
  }
  return (
    <form className={css.form}>
      <div className={css.section}>
        <h1>Datos personales</h1>
      <SmallTextBox
        label="Nombre"
        value={nombre}
        onChange={handleChange}
      />
        <SmallTextBox
        label="Apellido"
        value={apellido}
        onChange={(e)=>{setApellido(e.target.value)}}
      />
      </div>
    </form>
  );
}

export default NuevoPaciente;
