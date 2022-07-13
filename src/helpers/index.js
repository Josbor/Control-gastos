// este es un conjunto de funciones que puedo usar en varios proyectos segun lo vaya necesitando

//generar un ID aleatorio
export const generarId=()=>{
    const random=Math.random().toString(36).substr(2);
    const fecha=Date.now().toString(36)
    return random + fecha
}

//formatear Fecha con localtoDatestring
export const formatoFecha=(timedate,zone='es-ES')=>{
    const Fecha=new Date(timedate);
    const options={  year: 'numeric', month: 'long', day: '2-digit' }
    
    return Fecha.toLocaleDateString(zone,options)
}

//formatear Datos tipo moneda 
export const formatomoneda=(cantidad)=>{ // use api de javascript para formatear el valor de la cantidad (.toLocaleString)
    return cantidad.toLocaleString('en-US',{style:'currency', currency:'USD'})
  }

export const savelocalstorage=(name,content)=>{
    localStorage.setItem(`${name}`,JSON.stringify(content))
    console.log('guardado en el localstorage')
}