import { useState } from "react"


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
        <div>
            <button onClick={substractCounter}> - </button>
            <strong>{counter}</strong>
            <button onClick={addCounter}> + </button>
        </div>

        <button onClick={()=>addFunction(counter)}> Add to the Cart</button>
    </>
  )
}

export default Counter