import React from 'react'
import { formatoFecha } from '../helpers'
import {SwipeableList,
        SwipeableListItem,
        LeadingActions,
        SwipeAction,
        TrailingActions
        } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import iconoAhorro from '../img/icono_ahorro.svg'
import iconocasa from '../img/icono_casa.svg'
import iconocomida from '../img/icono_comida.svg'
import iconogastos from '../img/icono_gastos.svg'
import iconoocio from '../img/icono_ocio.svg'
import iconosalud from '../img/icono_salud.svg'
import iconosuscripciones from '../img/icono_suscripciones.svg'

const Gasto = ({gasto, // props de gasto
                editargasto,
                setEditargasto,
                eliminargasto   
               }) => {
    const {nombre,cantidad,categoria,fecha}=gasto
    const iconos={
        Ahorro:iconoAhorro,
        Comida:iconocomida,
        Casa:iconocasa,
        Gastos:iconogastos,
        Ocio:iconoocio,
        Suscripciones:iconosuscripciones,
        Salud:iconosalud

    }
    // estas son funciones de la funcionabilidad de react-swipeable-list
    // buscar directamente en los componentes de react
    //https://www.npmjs.com/package/react-swipeable-list
    
    const leadingActions = () => (// funcion para swipe hacia la izaquierda
        <LeadingActions>
              <SwipeAction onClick={() => setEditargasto(gasto)}>
                Editar
              </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (// funcion de swipe hacia la derecha
      <TrailingActions>
        <SwipeAction 
        destructive={true}
        onClick={() => eliminargasto(gasto.id)}
        >
          eliminar
        </SwipeAction>
      </TrailingActions>
    )
    

    return (
      <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >
                  <div className='gasto sombra'>
                          <div className='contenido-gasto'>
                              <img  src= {iconos[categoria]} alt={categoria} />
                            <div className='descripcion-gasto'>
                                      <p className='nombre-gasto'>{nombre}</p>
                                      <p className='categoria'>{categoria}</p>
                                      <p className='fecha-gasto'>Agregado el: <span>{formatoFecha(fecha)}</span> </p>
                            </div>

                          </div>
                          <div className='cantidad-gasto'>
                          <p>${cantidad}</p>
                          </div>
                  </div>
            </SwipeableListItem>
      </SwipeableList>
  )
}

export default Gasto
