import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({item, quantity}) => {
    const {deleteFromCart} = useContext(CartContext)

  return (
    <div className="cart-item-container">
        <h3>{item.name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Price: {item.price}€</p>
        <button className="delete-from-cart" onClick={()=>deleteFromCart(item.id)}>Delete</button>
    </div>
  )
}

export default CartItem