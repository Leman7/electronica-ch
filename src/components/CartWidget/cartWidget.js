import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext"

export const CartWidget = () => {
  const { quantity } = useContext(CartContext);

  return (
    <div className="widgets-wrap float-md-right">
      <div className="widget-header  mr-3">
        <a className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
        <span className="badge badge-pill badge-danger notify"> { quantity }</span>
      </div>
    </div>
  );
}