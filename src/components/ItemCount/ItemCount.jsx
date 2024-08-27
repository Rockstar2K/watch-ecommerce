import React from 'react'
//1) Importar el Hook:
import { useState } from 'react'


//Trabajamos con el ESTADO
//Recuerden que es un onjeto con informacion util para el componente.

//El estado es un concepto de React y no de JS. Por eso para utilizarlo vamos a usar los Hooks, que ya vienen incorporados en la libreria

//Que son los Hooks?
// son funcionalidades propias y podemos adicionar a nuestro componente


//2) El Hook useState me va a retornar un array. Este array tiene dos elementos, el primero es el estado, el segundo es una funcion que me actualiza ese estado


const ItemCount = ({stock}) => {

 const [contador, setContador] = useState(0)

 const incrementar = () => {
    if(contador < stock){
        setContador(contador + 1)
    }
 }

 const decrementar = () => {
    if(contador > 1){
        setContador(contador - 1)
    }
 }


  return (
    <div>
        <button onClick={incrementar}> + </button>
        <p>{contador} </p>
        <button onClick={decrementar}> - </button>

    </div>
  )
}

export default ItemCount