import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Counter from '../Counter/Counter'
import './ItemDetail.css'


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
    <div className='item-detail-product_container'>
        <div>
            <img className='item-detail_img' src={img} alt={name} />
        </div>
        <h3 className='item-detail_name'>{name}</h3>
        <p className='item-detail_description'>{description}</p>
        <p className='item-detail_price'>{price}€</p>
        {
          //Acá empleamos la logica de montaje y desmotaje del contador
          addQuantity > 0 ? (<Link to="/cart"> <button className='finish-purchase_button'>Finish Purchase</button></Link>
          ) : (
          <Counter initial={1} stock={stock} addFunction={quantityManager}/>)
        }
       
    </div>
  )
}

export default ItemDetail