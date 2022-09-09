
import { useContext, useState } from "react";
import { getFirestore } from '../../firebase'
import { CartContext } from '../../context/cartContext'
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./cart.css";

export const Cart = () => {

    const { cart, removeProduct, setCart, setQuantity } = useContext(CartContext);
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const history = useHistory()

    const calculatePrice = (price, qty) => {
        return price * qty;
    };
   
    function fire(e) {
        e.preventDefault();

        const db = getFirestore();
        db.collection('orders').add(
            {
                buyer: {
                    name,
                    email,
                    phone
                },
                cart: cart
            }
        )
        alert("La compra se ha realizado con exito")
        setCart([])
        setQuantity(0)
        history.push("/") 
    }

    return (
        <div className="cartItemsWrapper">
            {cart.length ? (
                cart.map((product) => (
                    <div key={product.id} className="itemCart">
                        <img src={product.image} alt="Producto cargando..." />
                        <h2>{product.title}</h2>
                        <h4>Cantidad: {product.qty}</h4>
                        <h4>${calculatePrice(product.price, product.qty)}</h4>
                        <Link
                            className="buttonRemove"
                            onClick={() => {
                                removeProduct(product);
                            }}
                        >
                            Remover
                        </Link>
                    </div>
                ))
            ) : (
                <h1>No hay items en el carrito</h1>
            )}

            {cart.length ? (
                <div><Form className="margin-form">
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Ingresar nombre" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Ingresar email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" onChange={(e) => setPhone(e.target.value)} placeholder="Ingresar telefono" />
                    </Form.Group>
                </Form>

                    <Button variant="primary" onClick={(e) => fire(e)}>
                        Comprar
                    </Button></div>
            ) : (
                <div></div>
            )}
        </div>
    );
};