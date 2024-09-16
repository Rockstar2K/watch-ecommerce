import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {


  return (
    <>
      {/* Add your NavBar or other common components outside of Routes */}

      {/* Use BrowserRouter instead of Router */}
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
