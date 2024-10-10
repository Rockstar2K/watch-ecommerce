import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
 const {cart, total, totalQuantity, emptyCart} = useContext(CartContext)

 if (totalQuantity === 0) {
    return (
        <>
            <h2>There is no products in the cart.</h2>
            <Link to="/">See Products</Link>
        </>

    )
 }

  return (
    <div className="cart-container">
        {
            cart.map(product => <CartItem key={product.item.id} {...product}/>)
        }
        <h3>Total: ${total}</h3>
        <h3>Total Quantity: {totalQuantity}</h3>
        <button onClick={emptyCart} className="secondary-button"> Empty Cart </button>
        <Link to="/checkout"><button className="primary-button">Proceed to Checkout</button></Link>

    </div>
  )
}

export default Cart