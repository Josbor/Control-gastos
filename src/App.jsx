import { useState } from 'react'
import Headerpresupuesto from './components/Headerpresupuesto'



function App() {
  const [presupuesto,setPresupuesto]=useState(0)
  return (
    <div >
           <Headerpresupuesto
           presupuesto={presupuesto}
           setPresupuesto={setPresupuesto}
           />

        
    </div>
  )
}

export default App
