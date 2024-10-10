import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({item, quantity}) => {
    const {deleteFromCart} = useContext(CartContext)

  return (
    <div>
        <h4>{item.name}</h4>
        <p>Quantity: {quantity}</p>
        <p>Price:{item.price}</p>
        <button class="delete-from-cart" onClick={()=>deleteFromCart(item.id)}>Delete</button>
    </div>
  )
}

export default CartItem