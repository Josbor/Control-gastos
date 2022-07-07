import React from 'react'

const MensajeAlerta = ({children,tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>
      {children}
    </div>
  )
}

export default MensajeAlerta
