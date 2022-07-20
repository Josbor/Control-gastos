
import ControlPresupuesto from './ControlPresupuesto'
import Nuevopresupuesto from './Nuevopresupuesto'


const Headerpresupuesto = ({presupuesto,setPresupuesto,setPresupuestoValido,presupuestoValido,gastos,handlereset}) => {
 
  
  return (
    <div>
      <header className='header '>
    <h1>PLANIFICACION Presupuesto</h1>
     
     {presupuestoValido?
     <ControlPresupuesto
     presupuesto={presupuesto}
     gastos= {gastos}
     handlereset={handlereset}
     />://este es un ternario 
     <Nuevopresupuesto
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      setPresupuestoValido={setPresupuestoValido}
      presupuestoValido={presupuestoValido}
      />}
      
      </header>
    </div>
  )
}

export default Headerpresupuesto

