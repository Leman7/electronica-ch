import { Link } from 'react-router-dom'
import { useContext, useEffect } from "react";
import { CartContext } from '../../context/cartContext'
export const ItemList = (props) => {
    const { cart } = useContext(CartContext)

    useEffect(
        () => {
            console.log(cart)
        }, []
    )

    return (
        <div className="col-md-6" >
            <div href="#" className="card card-product-grid">
                <Link className="img-wrap" to={`/item/${props.id}`}> <img style={{height: '350px'}}src={props.image}></img></Link>
                <figcaption className="info-wrap">
                    <Link className="title" to={`/item/${props.id}`}>{props.title}</Link>
                    <div className="price mt-1">${props.price}</div>
                </figcaption>
                <Link to={`/item/${props.id}`}><button type="button" className="btn btn-dark">Ver mas</button></Link>
            </div>
        </div>
    )
}