import { useEffect } from 'react'
import { useState } from 'react'
import Headerpresupuesto from './components/Headerpresupuesto'



function App() {
  const [presupuesto,setPresupuesto]=useState(0)
  const [presupuestoValido,setPresupuestoValido]=false

  useEffect()
  
  return (
    <div >
           <Headerpresupuesto
           presupuesto={presupuesto}
           setPresupuesto={setPresupuesto}
           setPresupuestoValido={setPresupuestoValido}
           />

        
    </div>
  )
}

export default App
