import React from 'react'

const TituloPrincipal = ({saludo, producto}) => {

  console.log(producto)

  /* 1er forma de desestructurar */
//const {saludo} = props

  return (
    <h1>
      {saludo}

      {/* Sin desestructuracion
      {props.saludo} */}
    </h1>
  )
}

export default TituloPrincipal