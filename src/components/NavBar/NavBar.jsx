import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {


  return (

    <header>
      <Link to='/'>
        <h1>Longines</h1> {/* add logo*/}
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>

                <li>
                  <NavLink to='/categoria/men'> Men</NavLink>
                </li>

                <li>
                  <NavLink to='/'> Woman</NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar