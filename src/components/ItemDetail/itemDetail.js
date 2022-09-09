import { useContext, useState } from "react";
import { CartContext } from '../../context/cartContext'
import { ItemCount } from "../ItemCount/itemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
    const { addToCart, quantity, setQuantity } = useContext(CartContext);
    const [qty, setQty] = useState(0);
   
    const onAdd = (qty) => {
        setQty(qty);
        setQuantity(quantity + qty)
        addToCart(product.productId, product.title, product.price, product.image, qty);
        alert("Se ha añadido al carrito")
    };

    return (
        <div className="itemDetail">
            <img src={product.image} alt="Producto cargando..." />
            <h2>{product.title}</h2>
            <h4>${product.price}</h4>
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />

            <Link
                className="buttonClose"
                to="/"
                onClick={() => {
                    setQty(0);
                }}
            >
                Ir atras
          </Link>
        </div>
    );
}


