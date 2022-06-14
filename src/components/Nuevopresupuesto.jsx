import React from 'react'

const Nuevopresupuesto = () => {
  return (
    <div className=' contenedor-presupuesto  contenedor sombra'>
      <form className='formulario' >
            <div className='campo'>
            <label>Definir Presupuesto </label>
            <input className=' nuevo-presupuesto' type="text" placeholder='ingresa un valor'/>
    

            </div>

            <input type="submit" value="añadir" />
      </form>
     
    </div>
  )
}

export default Nuevopresupuesto
