import { useState, useContext } from "react"
import {CartContext} from "../../context/CartContext" 
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [error, setError] = useState("")
    const [orderId, setOrderId] = useState("")

    const {cart, emptyCart, total} = useContext(CartContext)

    //funcion y validacion:

    const formManager =(e) => {
        e.preventDefault()

        //verificamos que los campos esten completos:
        if(!name || !lastname || !phone || !email || !emailConfirmation) {
            setError("Por favor completa todos los campos o moriras maldito!")
            return;
        }
        
    

        //validacion que los campos de email coincidan:
        if(email !== emailConfirmation){
            setError("Los campos del email no coinciden, maildito insecto")
            return;
        }

        //1) creamos un objeto con todos los datos de la orden de compra:
        const order = {
            items: cart.map (product => ({
                id: product.item.id,
                name: product.item.name,
                quantity: product.quantity
            })),
            total: total,
            date: new Date(),
            name,
            lastname,
            phone,
            email
        };
        ///////////////////////////////////////////////////////

        //Vamos a modificar el codigo para que ejecute varias promesas en paralelo, por un lado que actualice el stock de productos y por el otro lado que genere una orden de compra.
        //Vamos a usar para lograr esto: Promise.All

        Promise.all(
            order.items.map(async (productOrder) =>{
                const productoRef = doc(db, "products", productOrder.id)
                //Por cada prodcuto en la coleccion "productos" obtengo una referencia, y a partir de esa referencia obtengo el DOC.
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock
                //data es una metodo que me permite acceder a la informacion del documento

                await updateDoc(productoRef, {
                    stock: stockActual - productOrder.quantity
                })
                //modifico el stock y subo la informacion actualizada.
            })
        )
        .then(()=>{

        //Guardar la orden en la base de datos
        addDoc(collection(db, "orders"), order)
            .then(docRef => {
                setOrderId(docRef.id)
                emptyCart();
                setName("")
                setLastname("")
                setPhone("")
                setEmail("")
                setEmailConfirmation("")
                setError("") // Clear error after successful order
            })
            .catch(error => {
                console.log("Error al crear la orden", error)
                setError("Se producjo un error al crear la orden!")
            })
        })
        .catch((error) => {
            console.log("No se pudo actualizar el stock", error)
            setError("No se puede actualziar el stock, intente en el supermercado Vital")
        })
    }

  return (
    <div className="checkout-container">
        <h2> Products </h2>

        <form onSubmit={formManager}>
            <div className='products-container'>
            {   
                cart.map(product => (
                    <div key={product.item.id}>
                        <p><strong>{product.item.name}</strong></p>
                        <p>{product.item.price}€ x {product.quantity}</p>
                        <hr />
                        <p><strong>{product.item.price}€</strong></p>
    
                    </div>
                ))
            }
            </div>

            <div className="input-container">
            <h2> Checkout Details</h2>

            <div>
                 <label htmlFor=""> Name </label>
                 <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />                
            </div>
            <div>
                <label htmlFor=""> Lastname </label> 
                <input type="text" onChange={(e)=>setLastname(e.target.value)} value={lastname} /> 
            </div>
            <div>
            <label htmlFor=""> Phone </label> 
            <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} /> 
            </div>
            <div>
            <label htmlFor=""> Email </label> 
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
            <div>
            <label htmlFor=""> Email Confirmation </label> 
            <input type="email" onChange={(e)=>setEmailConfirmation(e.target.value)} value={emailConfirmation}/>
            </div>
                {
                    error && <p style={{color:"red"}}> {error}</p>
                }

            <button type="submit"> Confirmar Compra </button>
            {
                orderId && (
                    <strong>¡Thank you for your purchase! Your order number is: {orderId}</strong>
                )
            }
            </div>
        </form>
        
    </div>

  )
}

export default Checkout
