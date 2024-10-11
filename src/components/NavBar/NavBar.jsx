import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {


  return (

    <header>
      <Link to='/'>
        <img src="/assets/logo.svg" alt="Longines Logo" />
      </Link>

        <div>
        <nav>
            <ul>

                <li>
                  <NavLink to='/category/men'> Men</NavLink>
                </li>

                <li>
                  <NavLink to='/category/woman'> Woman</NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget/>
        </div>
   

    </header>
  )
}

export default NavBar