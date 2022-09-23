import React, { useEffect } from "react";
import SmallTextBox from "../../smallTextBox";
import { useState } from "react";
import css from "./index.module.css";
import DropDown from "../../dropDown";
import DateSelector from "../../dateSelector";
import LargeTextBox from "../../largeTextBox";
import AvailabilitySelector from "../../availabilitySelector";
import BooleanDropdown from "../../booleanDropdown";
import ImageUpload from "../../imageUpload/uploadImage";

function NuevoPaciente() {
  const profesionales = [
    "Laura Romagós",
    "Cesar Patiño",
    "Marc Falomí",
    "Olga Fàbrega",
    "Mireia Gayà",
    "Nora Baulida",
    "Anna Castanyer",
    "Laura Villegas",
    "Alba Rentero",
    "Vane Ledesma",
    "Pilar Vilaseca",
  ];

  const escuelas = [
    "Escola Sant Salvador d'horta (Sta. Coloma de Farners)",
    "Escola Castell de Farners (Sta. Coloma de Farners)",
    "Escola La Salle (Sta. Coloma de Farners)",
    "IES Sta. Coloma de Farners",
    "Escola Josep Boada (Riudarenes)",
    "Escola Els Estanys (Sils)",
    "Escola Jacint Verdaguer (Sils)",
    "IES Sils",
    "Escola Josep Madrenys (Vilobí)",
    "Escola Vilademany (Aiguaviva)",
    "Escola Les Arrels (Maçanet de la Selva)",
    "Escola St. Jordi (Maçanet de la Selva)",
    "IES de Maçanet de la Selva",
    "Escola St. Iscle (Vidreres)",
    "Escola Salvador Espriu (Vidreres)",
    "IES Vidreres",
    "Escola Riudellots",
    "Escola St. Esteva (Caldes de Malavella)",
    "Escola La Benaula (Caldes de Malavella)",
    "IES Caldes de Malavella",
    "Escola Aldric (Cassà de la Selva)",
    "Escola Puig d'Arques (Cassà de la Selva)",
    "Escola La Salle (Cassà de la Selva)",
    "IES Cassà de la Selva",
    "Escola Montessori (Palau)",
    "Escola Les Alzines (Girona)",
    "Escola Bell·lloc (Girona)",
    "Escola Maristes (Girona)",
    "Escola Pompeu Fabra (Anglès)",
    "Escola FEDAC (Anglès)",
    "IES Anglès",
    "Escola Juncadella (La Cellera de Ter)",
    "Escola La Vall (Osor)",
    "Escola St. Jordi (Bonmatí)",
    "Escola Gaspar de Queralt (Amer)",
    "IES Amer",
    "Escola Les Planes d'Hostoles",
    "Escola Doctor Sobrequés (Bescanó)",
    "IES Bescanó",
  ];

  const privadaBecaOpciones = [
    "Privada",
    "Beca escola",
    "Beca familia",
    "Beca avançada",
  ];

  const tiposDeTratamiento = [
    "Primera visita",
    "Psicoterapia adults",
    "Psicoterapia joves",
    "Psicoterapia infants/adolescents",
    "Sessió familiar",
    "Sessió parella",
    "Artteràpia individual",
    "Artteràpia grups",
    "Psicopedagogia individual 45m'",
    "Psicopedagogia individual 30m'",
    "Psicopedagogia grup",
    "Exploració (tests)",
    "Informe diagnòstic",
    "Devolució estudi diagnòstic",
    "Reforç Escolar individual",
    "Reforç Escolar grup",
    "Tècniques Estudi individual",
    "Tècniques Estudi grup",
    "Logopèdia 45m'",
    "Logopèdia 30m'",
    "Glifing",
  ];

  const metodosDePago = [
    "Domiciliació",
    "Transferència",
    "Efectiu",
    "Efectiu/Targeta",
    "Factura familia",
    "Factura escola",
  ];

  const pagoHecho = ["Cobrat", "Impagat", "Pendent de pagament"];

  const [fecha, setFecha] = useState(new Date());
  const [dob, setDob] = useState(new Date());
  const [nombre, setNombre] = useState(""); //firstName
  const [apellido, setApellido] = useState(""); //lastName1
  const [apellido2, setApellido2] = useState(""); //lastName2
  const [escuela, setEscuela] = useState(""); //school
  const [curso, setCurso] = useState(""); //class
  const [tutor, setTutor] = useState(""); //tutor
  // const [padres, setPadres] = useState(""); //parent changing to guardian
  const [telefono, setTelefono] = useState(""); //phone-number
  const [email, setEmail] = useState(""); //email
  const [direccion, setDireccion] = useState(""); // address
  const [postal, setPostal] = useState(""); //postal
  const [centro, setCentro] = useState(""); //centre
  const [genograma, setGenograma] = useState(""); //family tree
  const [motivo, setMotivo] = useState("Demanda psicoterapéutica"); // reason for consultation
  const [psicoterapéutica1, setPsicoterapéutica1] = useState(""); //¿Cuál es el problema desde el punto de vista de cada uno?
  const [psicoterapéutica2, setPsicoterapéutica2] = useState(""); //¿Cuándo empezó este problema?
  const [psicoterapéutica3, setPsicoterapéutica3] = useState(""); //¿Que soluciones se han intentado?
  const [psicoterapéutica4, setPsicoterapéutica4] = useState(""); //¿Porque han decidido pedir consulta ahora?
  const [psicoterapéutica5, setPsicoterapéutica5] = useState(""); //¿Están todos de acuerdo en pedir ayuda?
  const [psicoterapéutica6, setPsicoterapéutica6] = useState(""); //¿Que actitud/sentimientos tienen los miembros de la familia respecto al problema?
  const [psicoterapéutica7, setPsicoterapéutica7] = useState(""); //¿Qué esperan del trabajo terapéutico?
  const [psicoterapéutica8, setPsicoterapéutica8] = useState(""); //Other comments?
  const [clínica1, setClínica1] = useState(""); //¿Cuál es la dificultad o problema?
  const [clínica2, setClínica2] = useState(""); //¿Quién lo ha detectado y quien decide pedir ayuda o hacer una valoración?
  const [clínica3, setClínica3] = useState(""); //¿Están todos de acuerdo?
  const [clínica4, setClínica4] = useState(""); //¿En que ámbitos repercute la dificultad? (Escolar/familiar/social)
  const [clínica5, setClínica5] = useState(""); //¿Desde cuando existen estas dificultades y si se han valorado o trabajado previamente?
  const [sinEstructura, setsinEstructura] = useState(""); //unstructured response
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
  const [alergias, setAlergias] = useState(""); //allergies
  const [alergiasContenido, setAlergiasContenido] = useState(""); //more detail
  const [asma, setAsma] = useState(""); //asthma
  const [asmaContenido, setAsmaContenido] = useState("");
  const [enfermedades, setEnfermedades] = useState(""); // illness
  const [enfermedadesContenido, setEnfermedadesContenido] = useState("");
  const [operaciones, setOperaciones] = useState(""); // surgical operations
  const [operacionesContenido, setOperacionesContenido] = useState("");
  const [psicologicos, setPsicologicos] = useState(""); // psychological background
  const [psicologicosContenido, setPsicologicosContenido] = useState("");
  // const [antecedentesP, setAntecedentesP] = useState(""); //personal background
  const [antecedentesF, setAntecedentesF] = useState(""); // family history
  const [observaciones, setObservaciones] = useState(""); //observations or comments
  const [profesional, setProfesional] = useState(""); //therapist name
  const [privadaBeca, setPrivadaBeca] = useState(""); //funding private or grant further detail
  const [referencia, setReferencia] = useState(""); // main therapist
  const [pago, setPago] = useState(""); // payment method
  const [privBec, setPrivBec] = useState(""); // funding private or grant
  const [tutor1, setTutor1] = useState(""); // first guardian
  const [relacion1, setRelacion1] = useState(""); // relationship to child
  const [telefono1, setTelefono1] = useState(""); //guardian phone number
  const [tutor2, setTutor2] = useState(""); // second guardian
  const [relacion2, setRelacion2] = useState(""); // relationship to child
  const [telefono2, setTelefono2] = useState(""); //guardian phone number for guardian 2
  const [tratamiento, setTratamiento] = useState(""); //type of treatment
  const [disponibilidad, setDisponibilidad] = useState(""); // availability comment section
  const [pagado, setPagado] = useState(""); // paid or unpaid

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
    <form className={css.form} action="/paciente" method="get">
      <h1 className={css.header}>Nuevo Paciente</h1>
      <div className={css.subsectionheader}>
        <DropDown
          label="Centro:"
          onChange={(event) => {
            setCentro(event.target.value);
          }}
          value={centro}
          options={["SC", "A"]}
        />
        <DropDown
          label="Profesional que realiza primer visita: "
          onChange={(event) => {
            setProfesional(event.target.value);
          }}
          value={profesional}
          options={profesionales}
        />
        <DateSelector label="Fecha" onChange={setFecha} value={fecha} />
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
            label="Apellido 1"
            value={apellido}
            onChange={(e) => {
              setApellido(e.target.value);
            }}
            className={css.apellido}
          />
          <SmallTextBox
            label="Apellido 2"
            value={apellido2}
            onChange={(e) => {
              setApellido2(e.target.value);
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
          <DropDown
            label="Escuela:"
            onChange={(event) => {
              setEscuela(event.target.value);
            }}
            value={escuela}
            options={escuelas}
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
        </div>
        <h1>Familiares</h1>
        <div className={css.subsection}>
          <div className={css.familiares}>
            <SmallTextBox
              label="Nombre de tutor 1"
              value={tutor1}
              onChange={(e) => {
                setTutor1(e.target.value);
              }}
            />
            <SmallTextBox
              label="Relacion al menor"
              value={relacion1}
              onChange={(e) => {
                setRelacion1(e.target.value);
              }}
            />
            <SmallTextBox
              label="Telefono de tutor 1"
              value={telefono1}
              onChange={(e) => {
                setTelefono1(e.target.value);
              }}
            />
          </div>
          <div className={css.familiares}>
            <SmallTextBox
              label="Nombre de tutor 2"
              value={tutor2}
              onChange={(e) => {
                setTutor2(e.target.value);
              }}
            />
            <SmallTextBox
              label="Relacion al menor"
              value={relacion2}
              onChange={(e) => {
                setRelacion2(e.target.value);
              }}
            />
            <SmallTextBox
              label="Telefono de tutor 2"
              value={telefono2}
              onChange={(e) => {
                setTelefono2(e.target.value);
              }}
            />
          </div>
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
          <SmallTextBox
            label="Direccion"
            value={direccion}
            onChange={(e) => {
              setDireccion(e.target.value);
            }}
          />
          <SmallTextBox
            label="Codigo postal"
            value={postal}
            onChange={(e) => {
              setPostal(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={css.section}>
        <h1>Genograma</h1>
        <ImageUpload />
        <LargeTextBox
          value={genograma}
          onChange={(e) => {
            setGenograma(e.target.value);
          }}
        />
      </div>
      <div className={css.section}>
        <h1>Motivo de consulta</h1>
        <div className={css.motivoDropdown}>
        <DropDown
          label="Selecciona una opcion: "
          onChange={(event) => {
            setMotivo(event.target.value);
          }}
          value={motivo}
          options={[
            "Demanda psicoterapéutica",
            "Demanda clínica o de aprendizajes",
            "Entrevista no estructurada"
          ]}
        />
</div>
        {motivo === "Demanda psicoterapéutica" ? (
          <div>
            <LargeTextBox
              label="¿Cuál es el problema desde el punto de vista de cada uno?"
              value={psicoterapéutica1}
              onChange={(e) => {
                setPsicoterapéutica1(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿Cuándo empezó este problema?"
              value={psicoterapéutica2}
              onChange={(e) => {
                setPsicoterapéutica2(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿Que soluciones se han intentado?"
              value={psicoterapéutica3}
              onChange={(e) => {
                setPsicoterapéutica3(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿Porque han decidido pedir consulta ahora?"
              value={psicoterapéutica4}
              onChange={(e) => {
                setPsicoterapéutica4(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿Están todos de acuerdo en pedir ayuda? "
              value={psicoterapéutica5}
              onChange={(e) => {
                setPsicoterapéutica5(e.target.value);
              }}
            />

            <LargeTextBox
              label="¿Que actitud/sentimientos tienen los miembros de la familia respecto al problema? "
              value={psicoterapéutica6}
              onChange={(e) => {
                setPsicoterapéutica6(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿Qué esperan del trabajo terapéutico? "
              value={psicoterapéutica7}
              onChange={(e) => {
                setPsicoterapéutica7(e.target.value);
              }}
            />
            <LargeTextBox
              label="Otros comentarios? "
              value={psicoterapéutica8}
              onChange={(e) => {
                setPsicoterapéutica8(e.target.value);
              }}
            />
          </div>
        ) : motivo === "Demanda clínica o de aprendizajes"? (
          <>
            <LargeTextBox
              label="¿Cuál es la dificultad o problema?"
              value={clínica1}
              onChange={(e) => {
                setClínica1(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿Quién lo ha detectado y quien decide pedir ayuda o hacer una valoración?"
              value={clínica2}
              onChange={(e) => {
                setClínica2(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿Están todos de acuerdo?"
              value={clínica3}
              onChange={(e) => {
                setClínica3(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿En que ámbitos repercute la dificultad? (Escolar/familiar/social)"
              value={clínica4}
              onChange={(e) => {
                setClínica4(e.target.value);
              }}
            />
            <LargeTextBox
              label="¿Desde cuando existen estas dificultades y si se han valorado o trabajado previamente?"
              value={clínica5}
              onChange={(e) => {
                setClínica5(e.target.value);
              }}
            />
          </>
        ): (
          <div className={css.sinEstructura}>
           <LargeTextBox
              label="Entrevista no estructurada"
              
              value={sinEstructura}
              onChange={(e) => {
                setsinEstructura(e.target.value);
              }}
            />
            </div>
        )}

        <h1>Antecedentes / Tratamientos previos:</h1>
        {/* <label htmlFor="AntecedentedArchivo">Elegir archivo</label> */}
        <input
          id="AntecedentesArchivo"
          type="file"
          name="AntecedentesArchivo"
          className={css.antecedentesArchivo}
        />
        <LargeTextBox
          value={antecedentes}
          onChange={(e) => {
            setAntecedentes(e.target.value);
          }}
        />
      </div>
      <div className={css.ninoSection}>
        <h1>Descripción del niño/niña o adolescente:</h1>
        {/* <div className={css.subsection}> */}
        <div className={css.largebox}>
          <LargeTextBox
            label="Temperamento"
            value={temperamento}
            onChange={(e) => {
              setTemperamento(e.target.value);
            }}
          />
        </div>
        <div className={css.largebox}>
          <LargeTextBox
            label="Sociabilización"
            value={sociabilizacion}
            onChange={(e) => {
              setSociabilizacion(e.target.value);
            }}
          />
        </div>
        <div className={css.largebox}>
          <LargeTextBox
            label="Comportamiento en casa y en la escuela:"
            value={comportamiento}
            onChange={(e) => {
              setComportamiento(e.target.value);
            }}
          />
        </div>
        <div className={css.largebox}>
          <LargeTextBox
            label="Aprendizajes"
            value={aprendizajes}
            onChange={(e) => {
              setAprendizajes(e.target.value);
            }}
          />
        </div>
        {/* </div> */}
      </div>
      <div className={css.section}>
        <h1>Desarrollo</h1>
        <div className={css.subsection}>
          <div className={css.midbox}>
            <LargeTextBox
              label="Embarazos/ parto/ lactancia"
              value={embarazos}
              onChange={(e) => {
                setEmbarazos(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Desarrollo de lenguage"
              value={lenguage}
              onChange={(e) => {
                setLenguage(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Desarrollo psicomotriz"
              value={psicomotriz}
              onChange={(e) => {
                setPsicomotriz(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Vision y audicion"
              value={vision}
              onChange={(e) => {
                setVision(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Alimentacion / sueno"
              value={alimentacion}
              onChange={(e) => {
                setAlimentacion(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Control de esfinteres"
              value={esfinteres}
              onChange={(e) => {
                setEsfinteres(e.target.value);
              }}
            />
          </div>
          <div className={css.midbox}>
            <LargeTextBox
              label="Adaptacion a la escuela / guarderia"
              value={adaptacion}
              onChange={(e) => {
                setAdaptacion(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={css.section}>
        <h1>Antecedentes personales</h1>
        <div className={css.personalessection}>
          <BooleanDropdown
            label="Alergias"
            value={alergias}
            onChange={(e) => {
              setAlergias(e.target.value);
            }}
            handleChange={(e) => {
              setAlergiasContenido(e.target.value);
            }}
            content={alergiasContenido}
          />
          <BooleanDropdown
            label="Asma"
            value={asma}
            onChange={(e) => {
              setAsma(e.target.value);
            }}
            handleChange={(e) => {
              setAsmaContenido(e.target.value);
            }}
            content={asmaContenido}
          />
          <BooleanDropdown
            label="Enfermedades Importantes"
            value={enfermedades}
            onChange={(e) => {
              setEnfermedades(e.target.value);
            }}
            handleChange={(e) => {
              setEnfermedadesContenido(e.target.value);
            }}
            content={enfermedadesContenido}
          />
          <BooleanDropdown
            label="Operaciones quirurgicas"
            value={operaciones}
            onChange={(e) => {
              setOperaciones(e.target.value);
            }}
            handleChange={(e) => {
              setOperacionesContenido(e.target.value);
            }}
            content={operacionesContenido}
          />
          <BooleanDropdown
            label="Antecedentes psicologicos"
            value={psicologicos}
            onChange={(e) => {
              setPsicologicos(e.target.value);
            }}
            handleChange={(e) => {
              setPsicologicosContenido(e.target.value);
            }}
            content={psicologicosContenido}
          />
        </div>
      </div>
      <div className={css.section}>
        <h1>Antecedentes familiares</h1>
        <LargeTextBox
          value={antecedentesF}
          onChange={(e) => {
            setAntecedentesF(e.target.value);
          }}
        />
      </div>
      <div className={css.section}>
        <h1>Observaciones</h1>
        <LargeTextBox
          value={observaciones}
          onChange={(e) => {
            setObservaciones(e.target.value);
          }}
        />
      </div>
      <div className={css.datosDelCentro}>
        <h1>Datos del centro</h1>
        <div className={css.lastSubSection}>
          <DropDown
            label="Nombre del profesional de referencia:"
            onChange={(event) => {
            setReferencia(event.target.value);
          }}
            value={referencia}
            options={["Laura Romagós", "Cesar Patiño"]}
          />
          <DropDown
            label="Método de pago"
            onChange={(event) => {
              setPago(event.target.value);
            }}
            value={pago}
            options={metodosDePago}
          />
          <DropDown
            label="Tipo de tratamiento"
            onChange={(event) => {
              setTratamiento(event.target.value);
            }}
            value={tratamiento}
            options={tiposDeTratamiento}
          />
          <DropDown
            label="Pago"
            onChange={(event) => {
              setPagado(event.target.value);
            }}
            value={pagado}
            options={pagoHecho}
          />

          <div className={css.privadaBeca}>
            <DropDown
              label="Privada/beca"
              onChange={(event) => {
                setPrivBec(event.target.value);
              }}
              value={privBec}
              options={privadaBecaOpciones}
            />
            <div className={css.midbox}>
              <LargeTextBox
                placeholder="Mas informacion... "
                value={privadaBeca}
                onChange={(e) => {
                  setPrivadaBeca(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <h1>Disponibilidad</h1>
        <div className={css.lasteversection}>
          <AvailabilitySelector />
          <div className={css.commentBox}>
            <LargeTextBox
              placeholder="Mas informacion..."
              value={disponibilidad}
              onChange={(e) => {
                setDisponibilidad(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <input className={css.iniciar} type="submit" value="Iniciar"></input>
    </form>
  );
}

export default NuevoPaciente;
