import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


  return (

    <header>
        <h1>NFT Ecommerce</h1>

        <nav>
            <ul>
                <li className='text-sky-400'>Lacteos</li>
                <li className='text-warning'>Bebidas</li>
                <li>Almacen</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar