import React from 'react'

const Nuevopresupuesto = ({presupuesto,setPresupuesto}) => {
 const handlepresupuesto=(e)=>{
    e.preventDefault()
    if(!Number(presupuesto)||Number(presupuesto)< 0){
      console.log("no es un presupuesto valido")
    }else {
      
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
      </form>
     
    </div>
  )
}

export default Nuevopresupuesto
