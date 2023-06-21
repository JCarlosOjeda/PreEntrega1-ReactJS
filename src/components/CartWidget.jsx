import Carrito from "./img/carrito.svg"
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);
    return (
        (cartTotal() > 0) ? <Link className="btn btn-ligth position-relative" to={"/cart"}>
            <img src={Carrito} alt="Carrito" width={30} />
            <span className="cart position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotal()}
                <span className="visually-hidden">mensajes no leídos</span>
            </span>
        </Link> : ""
    )
}

export default CartWidget;