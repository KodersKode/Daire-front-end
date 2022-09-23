import React, { useState } from "react";
import css from "./index.module.css";

function AvailabilitySelector() {

  
const [checkedStateAM, setCheckedStateAM] = useState(new Array(7).fill(false));
const [checkStatePM, setCheckStatePM] = useState(new Array(7).fill(false));

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedStateAM.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedStateAM(updatedCheckedState)};

      const handleOnTick = (position) => {
    const updatedCheckState = checkStatePM.map((item, index) =>
      index === position ? !item : item
    );

    setCheckStatePM(updatedCheckState)};

    const days = [{name: "Lunes"}, {name:"Martes"}, {name:"Miércoles"}, {name:"Jueves"}, {name: "Viernes"}, {name: "Sabado"}, {name: "Domingo"}]

    console.log(`CheckedStateAM: ${checkedStateAM}`)
    console.log(`CheckStatePM: ${checkStatePM}`)
  return (
    <div className={css.disponibilidad}>
      <div className={css.title}>
        <p> Dias</p>
        <p>AM</p>
        <p>PM</p>
      </div>

      {days.map(({ name }, index) => {
          return (
            <>
            <> 
            <div className={css.dias}>
        <label htmlFor="Lunes"> {name}</label>
        <input type="checkbox" name={name} value={name} checked={checkedStateAM[index]}
          onChange={() => handleOnChange(index)}/>
          <input type="checkbox" name={name} value={name} checked={checkStatePM[index]}
          onChange={() => handleOnTick(index)}/>
        {/* <input type="checkbox" name="Lunes" value="Lunes pm" /> */}
      </div>
      </>
      </>)}
      )}
</div>)}

export default AvailabilitySelector;


      {/* <div className={css.dias}>
        <label htmlFor="Lunes"> Lunes</label>
        <input type="checkbox" name="Lunes" value="Lunes am" checked={checkedState[index]}
          onChange={() => handleOnChange(index)}/>
        <input type="checkbox" name="Lunes" value="Lunes pm" />
      </div>
      <div className={css.dias}>
        <label htmlFor="Martes"> Martes</label>
        <input type="checkbox" name="Martes" value="Martes am" />
        <input type="checkbox" name="Martes" value="Martes pm" />
      </div>
      <div className={css.dias}>
        <label htmlFor="Miércoles"> Miércoles</label>
        <input type="checkbox" name="Miércoles" value="Miércoles am" />
        <input type="checkbox" name="Miércoles" value="Miércoles pm" />
      </div>
      <div className={css.dias}>
        <label htmlFor="Jueves"> Jueves</label>
        <input type="checkbox" name="Jueves" value="Jueves am" />
        <input type="checkbox" name="Jueves" value="Jueves pm" />
      </div>
      <div className={css.dias}>
        <label htmlFor="Viernes"> Viernes</label>
        <input type="checkbox" name="Viernes" value="Viernes am" />
        <input type="checkbox" name="Viernes" value="Viernes pm" />
      </div>
      <div className={css.dias}>
        <label htmlFor="Sabado"> Sabado</label>
        <input type="checkbox" name="Sabado" value="Sabado am" />
        <input type="checkbox" name="Sabado" value="Sabado pm" />
      </div>
      <div className={css.dias}>
        <label htmlFor="Domingo"> Domingo</label>
        <input type="checkbox" name="Domingo" value="Domingo am" />
        <input type="checkbox" name="Domingo" value="Domingo pm" />
      </div>
    </div>
  );
} */}


