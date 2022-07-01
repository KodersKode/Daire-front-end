import React from 'react'
import css from './index.module.css'

function AvailabilitySelector() {
  return (
 <form  className={css.disponibilidad}>
        <div className={css.title}>
 <p> Dias</p>
 <p>AM</p>
  <p>PM</p>
   </div>
     
     <div className={css.dias}>
 <label htmlFor="Lunes"> Lunes</label>
  <input type="checkbox" name="Lunes" value="Lunes am"/>
   <input type="checkbox"  name="Lunes" value="Lunes pm"/>
   </div>
   <div className={css.dias}>
    <label htmlFor="Martes"> Martes</label>
  <input type="checkbox" name="Martes" value="Martes am"/>
   <input type="checkbox"  name="Martes" value="Martes pm"/>
   </div>
   <div className={css.dias}>
    <label htmlFor="Miércoles"> Miércoles</label>
  <input type="checkbox" name="Miércoles" value="Miércoles am"/>
   <input type="checkbox"  name="Miércoles" value="Miércoles pm"/>
   </div>
   <div className={css.dias}>
   <label htmlFor="Jueves"> Jueves</label>
  <input type="checkbox" name="Jueves" value="Jueves am"/>
   <input type="checkbox"  name="Jueves" value="Jueves pm"/>
   </div>
    <div className={css.dias}>
    <label htmlFor="Viernes"> Viernes</label>
  <input type="checkbox" name="Viernes" value="Viernes am"/>
   <input type="checkbox"  name="Viernes" value="Viernes pm"/>
   </div>
   <div className={css.dias}>
    <label htmlFor="Sabado"> Sabado</label>
  <input type="checkbox" name="Sabado" value="Sabado am"/>
   <input type="checkbox"  name="Sabado" value="Sabado pm"/>
   </div>
   <div className={css.dias}>
       <label htmlFor="Domingo"> Domingo</label>
  <input type="checkbox" name="Domingo" value="Domingo am"/>
   <input type="checkbox"  name="Domingo" value="Domingo pm"/>
</div>
</form>
  )
}

export default AvailabilitySelector