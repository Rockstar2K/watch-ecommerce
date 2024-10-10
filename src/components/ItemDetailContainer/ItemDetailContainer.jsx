import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import {getDoc, doc} from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);

  const {idItem} = useParams();

  useEffect(()=>{
    const newDoc = doc(db, "products", idItem)

    getDoc(newDoc)
      .then(res => {
        const data = res.data();
        const newProducts = {id: res.id,...data}
        setProduct(newProducts)
      })
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div> 
      
      {product ? (
        <ItemDetail {...product} />
      ) : (
        <p>Loading...</p> // Optional loading indicator
      )}
    </div>
  )
}

export default ItemDetailContainer