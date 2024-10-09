import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


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
    <div>
        {
            cart.map(product => <CartItem key={product.item.id} {...product}/>)
        }

        <h3>Total: ${total}</h3>
        <h3>Total Quantity: {totalQuantity}</h3>
        <button onClick={emptyCart}> Empty Cart</button>
        <Link to="/checkout">Proceed to Checkout</Link>

    </div>
  )
}

export default Cart