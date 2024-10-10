import Swal from "sweetalert2";
import { useState, createContext } from "react";

// 1) Create the context with default values (cart, total, totalQuantity).
export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0,
});

// 2) Create the CarritoProvider component that will wrap children and manage cart state.
export const CartProvider = ({ children }) => {

  //3)cremamos el estado para el carrito, total, y cantidadTotal
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // 4) Auxiliary functions to handle the logic of adding, removing, and emptying the cart:

  const addToCart = (item, quantity) => {
    const existentProduct = cart.find((prod) => prod.item.id === item.id);

    if (!existentProduct) {
      setCart((prev) => [...prev, { item, quantity }]);
      setTotalQuantity((prev) => prev + quantity);
      setTotal((prev) => prev + item.price * quantity);
    } else {
      const updatedCart = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      setTotalQuantity((prev) => prev + quantity);
      setTotal((prev) => prev + item.price * quantity);
    }
  };

  const deleteFromCart = (id) => {
    const deletedProduct = cart.find((prod) => prod.item.id === id);
    if (!deletedProduct) {
      Swal.fire('Error', 'Item not found in cart', 'error'); // Example use of SweetAlert
      return;
    }
    
    const updatedCart = cart.filter((prod) => prod.item.id !== id);
  
    setCart(updatedCart);
    setTotalQuantity((prev) => prev - deletedProduct.quantity);
    setTotal(
      (prev) => prev - deletedProduct.item.price * deletedProduct.quantity
    );
  };

  const emptyCart = () => {
      setCart([]);
      setTotalQuantity(0);
      setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        totalQuantity,
        addToCart,
        deleteFromCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};