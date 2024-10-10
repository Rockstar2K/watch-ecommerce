import {Link} from 'react-router-dom';
import './Item.css'

const Item = ({id, name, price, img, description}) => {
  return (
    <div className='cardProduct'>
        <div className="background-img_div">
            <img className='item-img' src={img} alt={name} />
        </div>
        <h3 className='item-name'>{name}</h3>
        <p className='item-description'>{description}</p>
        <p className='item-price'>{price}€</p>
       {/*  <p>{id}</p> maybe not display this*/}
        <Link to={`/item/${id}`}>
            <button className='item-button'>
                Buy now
            </button>
        </Link>
    </div>
  )
}

export default Item