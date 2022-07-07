import React from 'react'
import {useState} from 'react'
import MensajeAlerta from './MensajeAlerta'

const Nuevopresupuesto = ({presupuesto,setPresupuesto,setPresupuestoValido}) => {
  const [mensaje,setMensaje]=useState('')

 const handlepresupuesto=(e)=>{
    e.preventDefault()
    
    if(!presupuesto||presupuesto<=0){
      setMensaje("no es un presupuesto valido")
      setPresupuestoValido(false)
      return
    }
      setMensaje('')
      setPresupuestoValido(true)
     };
 
  return (
    <div className=' contenedor-presupuesto  contenedor sombra'>
      <form className='formulario' onSubmit={handlepresupuesto}>
            <div className='campo'>
            <label>Definir Presupuesto </label>
            <input className=' nuevo-presupuesto'
                   id='presu-text'
                   type="Number" 
                   placeholder='ingresa un valor'
                   value={presupuesto}
                   onChange={e=>setPresupuesto(Number(e.target.value))}
                   />
                   

            </div>

            <input type="submit" value="añadir" />
          {mensaje && <MensajeAlerta tipo='error'>{mensaje}</MensajeAlerta>} 
      </form>
     
    </div>
  )
}

export default Nuevopresupuesto
