import React from 'react'
import {useState} from 'react'
import Mensaje from './Mensaje'

const Nuevopresupuesto = ({presupuesto,setPresupuesto,setPresupuestoValido}) => {
  const [mensaje,setMensaje]=useState('')

 const handlepresupuesto=(e)=>{
    e.preventDefault()
    if(!Number(presupuesto)||Number(presupuesto)< 0){
      setMensaje("no es un presupuesto valido")
    }else {
      setMensaje('')
      setPresupuestoValido(true)
    }
    
      


 };
 
  return (
    <div className=' contenedor-presupuesto  contenedor sombra'>
      <form className='formulario' onSubmit={handlepresupuesto}>
            <div className='campo'>
            <label>Definir Presupuesto </label>
            <input className=' nuevo-presupuesto'
                   id='presu-text'
                   type="text" 
                   placeholder='ingresa un valor'
                   value={presupuesto}
                   onChange={e=>setPresupuesto(e.target.value)}
                   />
                   

            </div>

            <input type="submit" value="añadir" />
          {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>} 
      </form>
     
    </div>
  )
}

export default Nuevopresupuesto
