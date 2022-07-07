import React, { useEffect } from 'react'
import { formatomoneda } from '../helpers'


const ControlPresupuesto = ({presupuesto,gastos}) => {
 
  
    const gastado=gastos.reduce((total,actual)=>total+actual.cantidad,0)
    const disponible= presupuesto-gastado;
 
  
    return (
    <div className=' contenedor-presupuesto  contenedor sombra dos-columnas'>
      <div>
        <p>grafica</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
            <span>Presupuesto :</span> {formatomoneda(presupuesto)}
        </p>
        <p>
            <span>Disponible :</span> {formatomoneda(disponible)}
        </p>
        <p>
            <span>Gastado :</span> {formatomoneda(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
