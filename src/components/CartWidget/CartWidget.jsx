import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  return (
    <div>
      <Link to="/cart">
        <img className='cart-logo_img' src="/assets/cart.svg" alt="Shoping cart" />
      </Link>
        {
          totalQuantity > 0 && <span className="total-quantity_span" >{totalQuantity}</span>
        }

        
    </div>
  )
}

export default CartWidget