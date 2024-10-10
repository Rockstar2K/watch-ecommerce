import { useState } from "react"
import './Counter.css'

const Counter = ({initial, stock, addFunction}) => {

    const [counter, setCounter] = useState(initial)

    const addCounter = () => {
        if (counter < stock) {
            setCounter(counter +1)
        }
    }

    const substractCounter = () => {
        if ( counter > initial) {
            setCounter (counter - 1)
        }
    }

  return (
    <> 
    <div className="counter-container">
        <div className="counter-container_button">
            <button onClick={substractCounter}><strong> - </strong></button>
            <strong>{counter}</strong>
            <button onClick={addCounter}><strong> + </strong></button>
        </div>

        <button className="add-to-the-cart_button" onClick={()=>addFunction(counter)}> Add to the Cart</button>

    </div>

    </>
  )
}

export default Counter