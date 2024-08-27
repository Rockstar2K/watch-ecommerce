import React from 'react'
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal'
import Boton from './components/Boton/Boton'
import ItemCount from './components/ItemCount/ItemCount'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


const App = () => {

  const celular= {
    marca: "Samsung",
    precio: 1000000,
  }

  return (
    <>

      <NavBar/>
      <ItemListContainer greeting="Mis productos"/>
      
    </>
  )
}

export default App
