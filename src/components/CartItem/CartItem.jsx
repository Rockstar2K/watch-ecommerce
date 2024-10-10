import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({item, quantity}) => {
    const {deleteFromCart} = useContext(CartContext)

  return (
    <div>
        <h4>{item.name}</h4>
        <p>Quantity: {quantity}</p>
        <p>Precio:{item.price}</p>
        <button onClick={()=>deleteFromCart(item.id)}>Delete</button>
    </div>
  )
}

export default CartItem