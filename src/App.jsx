import { useEffect } from 'react'
import  {useState}  from 'react'
import Headerpresupuesto from './components/Headerpresupuesto'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import nuevogasto from './img/nuevo-gasto.svg'


function App() {
  const [presupuesto,setPresupuesto]=useState(0);
  const [presupuestoValido,setPresupuestoValido]=useState(false) ;
  const [modal,setModal]=useState(false);
  const [animar,setAnimar]=useState(false);
  const [gastos,setGastos]=useState([]);
  

  const handlemodal=()=>
  {
    setModal(true)
    setTimeout(()=>{
    setAnimar(true)
    
    }
      ,500
    )
  }
    
  const guardargasto=(gasto)=>{
    gasto.id=generarId();
    gasto.fecha=Date.now()
    setGastos([...gastos,gasto]);
   
    }
  return (
    <div >
        
           <Headerpresupuesto
           presupuesto={presupuesto}// enviando datos mediante props
           setPresupuesto={setPresupuesto}
           setPresupuestoValido={setPresupuestoValido}
           presupuestoValido={presupuestoValido}
           gastos={gastos}
           />

           
           
           {//validacion de presupuesto 
           
           
           presupuestoValido&&(
            <>
            <main>
                <ListadoGastos
                gastos={gastos}
                />
           </main>
           <div className='nuevo-gasto'>
              <img  src={nuevogasto}
              onClick={handlemodal}
               />
            </div>
                    
            </>
            
           
            
            )
           }
           {// modal para agregar un gasto
           modal && <Modal
                     setModal={setModal}
                     animar={animar}
                     setAnimar={setAnimar}
                     presupuesto={presupuesto}
                     guardargasto={guardargasto}
                     />}
    </div>
  )
}

export default App
