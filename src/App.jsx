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
  const [editargasto,setEditargasto]=useState({})
  

  useEffect(() => {
   if(Object.keys(editargasto).length > 0){
    handlemodal()
   }
  }, [editargasto]);

  const eliminargasto=(id)=>{
    const nuevosgastos=gastos.filter(gasto=>gasto.id!==id)
    setGastos(nuevosgastos)
  }
 
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
    if(Object.keys(editargasto).length > 0){
      const gastoseditado=gastos.map((gastos)=>{
        if (gastos.id===gasto.id){
          
          return gasto
        }else {return gastos}
        
      })

      setGastos(gastoseditado)
     }else{
      gasto.id=generarId();
      gasto.fecha=Date.now()
      setGastos([...gastos,gasto]);
     }
   
   
    }
   
  return (
    <div  className={modal?'fijar':''}>
        
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
                editargasto={editargasto}
                setEditargasto={setEditargasto}
                eliminargasto={eliminargasto}
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
                     editargasto={editargasto}
                     setEditargasto={setEditargasto}
                     />}
    </div>
  )
}

export default App
