import React,{useState} from 'react'

const FiltroGastos = ({setCategoriafiltro}) => {
    
  
    return (
    <div className='filtros contenedor sombra'>
     <form >
        <div className='campo'>
        <label htmlFor="">Filtro Gastos</label>
        <select name="categoria" id="categoria" onChange={e=>setCategoriafiltro(e.target.value)}>
                <option value="">-- Seleccione --</option>
                <option value="Ahorro">Ahorro</option>
                <option value="Comida">Comida</option>
                <option value="Casa">Casa</option>
                <option value="Gastos">Gastos Varios</option>
                <option value="Ocio">Ocio</option>
                <option value="Suscripciones">Suscripciones</option>
                <option value="Salud">Salud</option>
        </select>
        </div>
      </form>
    </div>
  )
}

export default FiltroGastos
