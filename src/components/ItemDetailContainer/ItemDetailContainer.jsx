import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getAnItemById } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);

  const {idItem} = useParams();

  useEffect(() => {
    //we call the function with the item id and set it in useState
    getAnItemById(idItem)
    .then(res => setProduct(res))
  }, [idItem])

  return (
    <div> 
        {/* displays the product */}
        <ItemDetail {...product}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer