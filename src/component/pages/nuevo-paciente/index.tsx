import React from "react";
import SmallTextBox from "../../smallTextBox";
import { useState } from "react";
import css from "./index.module.css";
import DropDown from "../../dropDown";
import DateSelector from "../../dateSelector";
import LargeTextBox from "../../largeTextBox";

function NuevoPaciente() {
  const [dob, setDob] = useState(new Date());
  const [nombre, setNombre] = useState(""); //firstName
  const [apellido, setApellido] = useState(""); //lastName
  const [escuela, setEscuela] = useState(""); //school
  const [curso, setCurso] = useState(""); //class
  const [tutor, setTutor] = useState(""); //tutor
  const [padres, setPadres] = useState(""); //parent
  const [telefono, setTelefono] = useState(""); //phone-number
  const [email, setEmail] = useState(""); //email
  const [genograma, setGenograma] = useState(""); //family tree
  const [motivo, setMotivo] = useState(""); // reason for consultation
  const [antecedentes, setAntecedentes] = useState(""); //medical history
  const [temperamento, setTemperamento] = useState(""); //nature of child
  const [sociabilizacion, setSociabilizacion] = useState(""); //social skills
  const [comportamiento, setComportamiento] = useState(""); //behaviour
  const [aprendizajes, setAprendizajes] = useState(""); // teachings / what they have learned

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
      <h1 className={css.header}>Nuevo Paciente</h1>
      <div className={css.wrapper}>
        <DropDown />
        <DateSelector label="Fecha" />
      </div>
      <div className={css.section}>
        <h1>Datos personales</h1>
        <div className={css.subsection}>
          <SmallTextBox
            label="Nombre"
            value={nombre}
            onChange={handleChange}
            className={css.nombre}
          />
          <SmallTextBox
            label="Apellido"
            value={apellido}
            onChange={(e) => {
              setApellido(e.target.value);
            }}
            className={css.apellido}
          />
          <DateSelector
            label="Fecha de nacimiento"
            onChange={setDob}
            value={dob}
            className={css.date}
          />
          <SmallTextBox
            value={getAge(dob)}
            label="Edad"
            className={css.apellido}
          />
        </div>
        <h1>Escolares</h1>
        <div className={css.subsection}>
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
        <h1>Datos de contacto</h1>
        <div className={css.subsection}>
          <SmallTextBox
            label="Telefono o de los padres si es menor"
            value={telefono}
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
          <SmallTextBox
            label="Email de contacto"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        </div>
        <div className={css.section}>
          <h1>Genograma</h1>
          <LargeTextBox text={genograma} onChange={(e) => {setGenograma(e.target.value)}}/>
        
      </div>
      <div className={css.section}>
        <h1>Motivo de consulta</h1>
        <LargeTextBox text={motivo} onChange={(e) => {setMotivo(e.target.value)}}/>
        <h1>Antecedentes / Tratamientos previos:</h1>
         <LargeTextBox text={antecedentes} onChange={(e) => {setAntecedentes(e.target.value)}}/>
      </div>
      <div className={css.section}>
        <h1>Descripción del niño/niña o adolescente:</h1>
        <div className={css.subsection}>
          <div className={css.midbox}>
           <SmallTextBox
            label="Temperamento"
            value={temperamento}
            onChange={(e) => {
              setTemperamento(e.target.value);
            }}
            
          />
          </div>
           <SmallTextBox
            label="Sociabilización"
            value={sociabilizacion}
            onChange={(e) => {
              setSociabilizacion(e.target.value);
            }}
          />
          
           <SmallTextBox
            label="Comportamiento en casa y en la escuela:"
            value={comportamiento}
            onChange={(e) => {
              setComportamiento(e.target.value);
            }}
          />
           <SmallTextBox
            label="Aprendizajes"
            value={aprendizajes}
            onChange={(e) => {
              setAprendizajes(e.target.value);
            }}
          />

        </div>

      </div>
    </form>
  );
}

export default NuevoPaciente;
