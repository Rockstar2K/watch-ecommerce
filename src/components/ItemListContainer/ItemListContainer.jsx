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
  const {idCategoria} = useParams();

  useEffect(()=> {
    setLoading(true)
    const myProducts = idCategoria ? query(collection(db, "products"), where("idCat", "==", idCategoria)) : (collection(db,"products"))

    getDocs(myProducts)
    .then (res => {
        
        const nuevosProductos = res.docs.map(doc =>{
            const data = doc.data()
            return {id:doc.id , ...data}
        })
        setProductos(nuevosProductos)
    })
    .catch(error => console.log(error))
    .finally(()=>{
        console.log("proceso finalizado")
        setLoading(false)
    })
}, [idCategoria])



  return (
    <>
      <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
      <div> {/* displays all the products after filtering them by category */}
        {loading ? <Loader/> :  <ItemList products={products}></ItemList>}
      </div>
    </>
  )
}

export default ItemListContainer