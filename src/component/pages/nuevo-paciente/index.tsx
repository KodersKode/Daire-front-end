import React from "react";
import SmallTextBox from "../../smallTextBox";
import { useState } from "react";
import css from "./index.module.css";
import DropDown from "../../dropDown";
import DateSelector from "../../dateSelector";
import LargeTextBox from "../../largeTextBox";
import AvailabilitySelector from "../../availabilitySelector";

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
  const [embarazos, setEmbarazos] = useState(""); //pregnancy, labour, breastfeeding
  const [lenguage, setLenguage] = useState(""); //speech or language development
  const [psicomotriz, setPsicomotriz] = useState(""); //hand eye coordination - psychomotor
  const [vision, setVision] = useState(""); //vision and hearing
  const [alimentacion, setAlimentacion] = useState(""); //diet
  const [esfinteres, setEsfinteres] = useState(""); //control of bowels
  const [adaptacion, setAdaptacion] = useState(""); //Adapting to school or nursery
  const [antecedentesP, setAntecedentesP] = useState(""); //personal background
  const [antecedentesF, setAntecedentesF] = useState(""); // family history
  const [observaciones, setObservaciones] = useState(""); //observations or comments
  const [profesional, setProfesional] = useState(""); //therapist name
  const [privadaBeca, setPrivadaBeca] = useState(""); //funding private or grant

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
      <div className={css.subsection}>
        <DropDown label="Profesional que realiza primer visita: " />
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
        <LargeTextBox
          text={genograma}
          onChange={(e) => {
            setGenograma(e.target.value);
          }}
        />
      </div>
      <div className={css.section}>
        <h1>Motivo de consulta</h1>
        <LargeTextBox
          text={motivo}
          onChange={(e) => {
            setMotivo(e.target.value);
          }}
        />
        <h1>Antecedentes / Tratamientos previos:</h1>
        <LargeTextBox
          text={antecedentes}
          onChange={(e) => {
            setAntecedentes(e.target.value);
          }}
        />
      </div>
      <div className={css.section}>
        <h1>Descripción del niño/niña o adolescente:</h1>
        <div className={css.subsection}>
          <div className={css.midbox}>
            <LargeTextBox
              label="Temperamento"
              text={temperamento}
              onChange={(e) => {
                setTemperamento(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Sociabilización"
              text={sociabilizacion}
              onChange={(e) => {
                setSociabilizacion(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Comportamiento en casa y en la escuela:"
              text={comportamiento}
              onChange={(e) => {
                setComportamiento(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Aprendizajes"
              text={aprendizajes}
              onChange={(e) => {
                setAprendizajes(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={css.section}>
        <h1>Desarrollo</h1>
        <div className={css.subsection}>
          <div className={css.midbox}>
            <LargeTextBox
              label="Embarazos/ parto/ lactancia"
              text={embarazos}
              onChange={(e) => {
                setEmbarazos(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Desarrollo de lenguage"
              text={lenguage}
              onChange={(e) => {
                setLenguage(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Desarrollo psicomotriz"
              text={psicomotriz}
              onChange={(e) => {
                setPsicomotriz(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Vision y audicion"
              text={vision}
              onChange={(e) => {
                setVision(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Alimentacion / sueno"
              text={alimentacion}
              onChange={(e) => {
                setAlimentacion(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Control de esfinteres"
              text={esfinteres}
              onChange={(e) => {
                setEsfinteres(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Adaptacion a la escuela / guarderia"
              text={adaptacion}
              onChange={(e) => {
                setAdaptacion(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={css.section}>
      <h1>Antecedentes personales</h1>
      <LargeTextBox
          text={antecedentesP}
          onChange={(e) => {
            setAntecedentesP(e.target.value);
          }}
        />
        </div>
         <div className={css.section}>
      <h1>Antecedentes familiares</h1>
      <LargeTextBox
          text={antecedentesF}
          onChange={(e) => {
            setAntecedentesF(e.target.value);
          }}
        />
        </div>
              <div className={css.section}>
      <h1>Obervaciones</h1>
      <LargeTextBox
          text={observaciones}
          onChange={(e) => {
            setObservaciones(e.target.value);
          }}
        />
        </div>
        <div className={css.section}>
          <h1>Datos del centro</h1>
          <div className={css.subsection}>
      <DropDown label="Nombre del profesional de referencia:" />
      <DropDown label="Forma de pago" />
       
       </div>
        <div className={css.lastsection}>
      <div className={css.privadaBeca}>
         <DropDown label="Privada/beca" />
         <div className={css.midbox}>
          <LargeTextBox
          text={privadaBeca}
          onChange={(e) => {
            setPrivadaBeca(e.target.value);
          }}
        />
        </div>
       </div>
       <AvailabilitySelector />
       </div>
        </div>

    </form>
  );
}

export default NuevoPaciente;
