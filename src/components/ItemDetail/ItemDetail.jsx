import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Counter from '../Counter/Counter'



const ItemDetail = ({id, name, price, img, stock, description}) => {

  // creamos un estado local con la cantidad de productos agregados
  const [addQuantity, setAddQuantity] = useState(0);

  const {addToCart} = useContext(CartContext);

  //cremaos una funcion manejadora de la cantidad:

  const quantityManager = (quantity) => {
    setAddQuantity(quantity);

    //Ahora aca yo puedo crear un objeto con el item y la cantidad
    const item = {id, name, price}
    addToCart(item, quantity)
    toast.success("Your purchase was added to the cart successfully", {
      autoClose:1000, 
      theme: "dark", 
      position: "top-right"})
  }


  return (
    <div className='cardProduct'>
        <div>
            <img className='item-img' src={img} alt={name} />
        </div>
        <h3 className='item-name'>{name}</h3>
        <p className='item-description'>{description}</p>
        <p className='item-price'>{price}€</p>
        {
          //Acá empleamos la logica de montaje y desmotaje del contador
          addQuantity > 0 ? (<Link to="/cart"> Terminar Compra</Link>
          ) : (
          <Counter initial={1} stock={stock} addFunction={quantityManager}/>)
        }
       
    </div>
  )
}

export default ItemDetail