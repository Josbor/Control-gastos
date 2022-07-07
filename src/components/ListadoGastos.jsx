import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  
    return (
    <div className='listado-gastos contenedor' >
     {gastos.length?gastos.map(gasto=>{

        return <Gasto
                key={gasto.id}
                gasto={gasto}

                />
        })
        :<h2>NO hay gastos</h2>}
     
        


        
        
    
    </div>
  )
}

export default ListadoGastos
