import { useEffect } from 'react'
import  {useState}  from 'react'
import FiltroGastos from './components/FiltroGastos'
import Headerpresupuesto from './components/Headerpresupuesto'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId} from './helpers'
import nuevogasto from './img/nuevo-gasto.svg'


function App() {
  const [presupuesto,setPresupuesto]=useState(
      Number(localStorage.getItem('presupuesto')??0) 
  );
  const [presupuestoValido,setPresupuestoValido]=useState(false) ;
  const [modal,setModal]=useState(false);
  const [animar,setAnimar]=useState(false);
  const [gastos,setGastos]=useState(
    JSON.parse(localStorage.getItem('gastos'))??[]
    );
  const [editargasto,setEditargasto]=useState({})
  const [categoriafiltro,setCategoriafiltro]=useState('')

  useEffect(()=>{
   if (presupuesto>0){
    setPresupuestoValido(true)
   }

  },[])
  

  
  useEffect(() => {
    localStorage.setItem('presupuesto',presupuesto??0)
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('gastos',JSON.stringify(gastos??[]))
  }, [gastos]);


  
  
  const handlereset=()=>{
    // resetea valor del presupuesto
    const mensaje =confirm('¿Desea resetear la aplicacion?')
    if (mensaje){
      setPresupuesto(0)
      setPresupuestoValido(false)
      setGastos([])
      console.log('App reseteada exitosamente')
    }
    
  
    
      }
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
           handlereset={handlereset}
           />

           
           
           {//validacion de presupuesto 
           
           
           presupuestoValido&&(
            <>
            <main>
                <FiltroGastos
                setCategoriafiltro={setCategoriafiltro}
                />
                <ListadoGastos
                gastos={categoriafiltro==''?gastos:gastos.filter((gastos)=>gastos.categoria===categoriafiltro)}
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
