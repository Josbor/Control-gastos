
import Nuevopresupuesto from './Nuevopresupuesto'

const Headerpresupuesto = ({presupuesto,setPresupuesto}) => {
  return (
    <div>
      <header className='header '>
    <h1>PLANIFICACION Presupuesto</h1>
      <Nuevopresupuesto
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      />
      </header>
    </div>
  )
}

export default Headerpresupuesto

