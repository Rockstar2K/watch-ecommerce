import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import logoSvg from '../../../public/img/logo.svg'

const NavBar = () => {


  return (

    <header>
      <Link to='/'>
        <img src={logoSvg} alt="Logo" />
      </Link>

        <div>
        <nav>
            <ul>

                <li>
                  <NavLink to='/categoria/men'> Men</NavLink>
                </li>

                <li>
                  <NavLink to='/categoria/woman'> Woman</NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget/>
        </div>
   

    </header>
  )
}

export default NavBar