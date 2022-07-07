
import ControlPresupuesto from './ControlPresupuesto'
import Nuevopresupuesto from './Nuevopresupuesto'

const Headerpresupuesto = ({presupuesto,setPresupuesto,setPresupuestoValido,presupuestoValido,gastos}) => {
 
  
  return (
    <div>
      <header className='header '>
    <h1>PLANIFICACION Presupuesto</h1>
     
     {presupuestoValido?
     <ControlPresupuesto
     presupuesto={presupuesto}
     gastos= {gastos}
     />://este es un ternario 
     <Nuevopresupuesto
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      setPresupuestoValido={setPresupuestoValido}
      />}
      
      </header>
    </div>
  )
}

export default Headerpresupuesto

