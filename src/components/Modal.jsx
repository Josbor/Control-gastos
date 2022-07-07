
import {useState} from 'react'
import React from 'react'
import Cerrarbtn  from '../img/cerrar.svg'
import Mensaje from './Mensaje'





const Modal = ({animar,setAnimar,presupuesto,setModal,guardargasto}) => {
    

    const [nombre, setNombre]=useState('');
    const [cantidad,setCantidad]=useState(0);
    const [categoria,setCategoria]=useState('');
    const [alerta,setAlerta]=useState('');
    const handlecerrar=()=>{
        
        setAnimar(false);
        setTimeout(()=>{
          setModal(false);
        },500)
    }

    const handlegasto=(e)=>{
      e.preventDefault()
      if ([nombre,cantidad,categoria].includes('')){
         setAlerta('por favor ingrese datos');
         //agregamos un timer para desaparecer el letrero
        setTimeout(()=>{
          setAlerta('')
        },3000)
         return
      }else if(cantidad>presupuesto||cantidad<=0){
        setAlerta('por favor ingrese monto valido');
        
         return
      }
      setAlerta('')
      guardargasto({nombre,cantidad,categoria})
      handlecerrar()
     }
    
  return (
    <div className='modal'>
           <div className='cerrar-modal' >
            <img src={Cerrarbtn}
                 alt="cerrar modal"
                 onClick={handlecerrar}
                 />
           </div>
           <form  className={`formulario ${animar?'animar':'cerrar'}`} onSubmit={handlegasto}>
              <legend>Nuevo Gasto</legend>
              {alerta&&<Mensaje tipo='error'>{alerta}</Mensaje>}
              <div className='campo'>
                <label htmlFor='nombre' >Nombre Gasto</label>
                <input id="nombre" type="text" placeholder='Añade el nombre del Gasto' value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
              </div>
              <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input id="cantidad" type="text" placeholder='Añade la cantidad de gasto: Ej 300 ' value={cantidad>0?cantidad:''} onChange={e=>setCantidad(Number(e.target.value))}/>
              </div>
              <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select name="categoria" id="categoria" onChange={e=>setCategoria(e.target.value)}>
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
              <div>
              <input type="submit" value="añadir Gasto" />
              </div>
              
            
           </form>
           
    </div>
  )
}

export default Modal