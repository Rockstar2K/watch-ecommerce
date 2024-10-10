import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

const CartItem = ({item, quantity}) => {
    const {deleteFromCart} = useContext(CartContext)

    console.log('cart item: ' +  item.img)

  return (
    <div className="cart-item-container">
        <img src={item.img} alt={item.name} />
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: {item.price}</p>
        <button className="delete-from-cart" onClick={()=>deleteFromCart(item.id)}>Delete</button>
    </div>
  )
}

export default CartItem