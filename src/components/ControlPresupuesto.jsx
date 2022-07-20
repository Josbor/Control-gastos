import React, { useEffect,useState } from 'react'
import {formatomoneda} from '../helpers'
import {CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'


const ControlPresupuesto = ({presupuesto,gastos,handlereset}) => {
  const [disponible,setDisponible]=useState(0)
  const [gastado,setGastado]=useState(0)
  const[porcentaje,setPorcentaje]=useState('')
  const[porcentajecolor,setPorcentajecolor]=useState('')
  

  const colores=(valor)=>{
    
          if (valor>=0&&valor<=25)
            {setPorcentajecolor('#50f690')}
          else if (valor>25&&valor<=50)
            {setPorcentajecolor('#CEF650')}
          else if (valor>50&&valor<=75)
            {setPorcentajecolor('#F6E750')}
          else if (valor>75)
            {setPorcentajecolor('#F65050')}
          else
            {setPorcentajecolor('#50f690')}
   }
   useEffect(() => {
        
        const totalgastado=gastos.reduce((total,actual)=>total+actual.cantidad,0)
        const totaldisponible=presupuesto-totalgastado;
        setDisponible(totaldisponible)
        setGastado(totalgastado)
        const calculo=((totalgastado*100)/presupuesto).toFixed(2)
         
        setTimeout(() => {
          colores(calculo);
          setPorcentaje(calculo)
        },1000);
      
    },[gastos]);
 
    
    return (
    <div className=' contenedor-presupuesto  contenedor sombra dos-columnas'>
      <div>
     <CircularProgressbar
            value={porcentaje} 
            
            text={`${porcentaje} % Gastado`}
            styles={buildStyles({pathColor: `${porcentajecolor}`,})}
       />
      </div>
      <div className='contenido-presupuesto'>
        <button className='reset-app' type="button" onClick={handlereset} >Resetear App</button>
        
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
