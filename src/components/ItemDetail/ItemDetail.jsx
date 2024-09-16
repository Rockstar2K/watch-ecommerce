import {Link} from 'react-router-dom';

const ItemDetail = ({id, name, price, img, description}) => {
  return (
    <div className='cardProduct'>
        <div>
            <img className='item-img' src={img} alt="nombre" />
        </div>
        <h3 className='item-name'>{name}</h3>
        <p className='item-description'>{description}</p>
        <p className='item-price'>{price}€</p>
       
    </div>
  )
}

export default ItemDetail