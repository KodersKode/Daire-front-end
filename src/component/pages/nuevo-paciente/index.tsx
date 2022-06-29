import React from "react";
import SmallTextBox from "../../smallTextBox";
import { useState } from "react";
import css from "./index.module.css";
import DatePicker from "react-date-picker";

function NuevoPaciente() {
  const [dob, setDob] = useState(new Date());
  const [nombre, setNombre] = useState(""); //firstName
  const [apellido, setApellido] = useState(""); //lastName

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNombre(e.target.value);
  }
  console.log(dob);

  function getAge(dob) {
    var today = new Date();
    var birthDate = dob;
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <form className={css.form}>
      <div className={css.section}>
        <h1>Datos personales</h1>
        <SmallTextBox label="Nombre" value={nombre} onChange={handleChange} />
        <SmallTextBox
          label="Apellido"
          value={apellido}
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        />
        <DatePicker onChange={setDob} value={dob} />
        <SmallTextBox value={getAge(dob)} label="Edad" />
        <h1>Escolares</h1>
        <SmallTextBox
          label="Escuela"
          value={escuela}
          onChange={(e) => {
            setEscuela(e.target.value);
          }}
        />
        <SmallTextBox
          label="Curso"
          value={curso}
          onChange={(e) => {
            setCurso(e.target.value);
          }}
        />
        <SmallTextBox
          label="Tutor/Tutora"
          value={tutor}
          onChange={(e) => {
            setTutor(e.target.value);
          }}
        />
        <SmallTextBox
          label="Nombre de los padres"
          value={padres}
          onChange={(e) => {
            setPadres(e.target.value);
          }}
        />
      </div>
    </form>
  );
}

export default NuevoPaciente;
