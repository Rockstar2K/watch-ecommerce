import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const {idCategory} = useParams();

  useEffect(()=> {
    setLoading(true)
    const myProducts = idCategory ? query(collection(db, "products"), where("idCategory", "==", idCategory)) : (collection(db,"products"))

    getDocs(myProducts)
    .then (res => {
        
        const newProducts = res.docs.map(doc =>{
            const data = doc.data()
            return {id:doc.id , ...data}
        })
        setProducts(newProducts)
    })
    .catch(error => console.log(error))
    .finally(()=>{
        console.log("proceso finalizado")
        setLoading(false)
    })
}, [idCategory])



  return (
    <>
      <h2 style={{ textAlign: "center" }}>My Products</h2>
      <div> {/* displays all the products after filtering them by category */}
        {loading ? <Loader/> :  <ItemList products={products}></ItemList>}
      </div>
    </>
  )
}

export default ItemListContainer