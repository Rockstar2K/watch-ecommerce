import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    //if there arent categories, we return all products
    const functionProducts = idCategoria ? getProductsByCategory : getProducts;

    //we call the function with the category id
    functionProducts(idCategoria)
    .then(res => setProducts(res))
  }, [idCategoria])

  return (
    <div> {/* displays all the products after filtering them by category */}
        <ItemList products={products}></ItemList>
    </div>
  )
}

export default ItemListContainer