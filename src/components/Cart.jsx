import Carrito from "./img/carrito.svg"
const Cart = () => {
    return (
        <button type="button" className="btn btn-ligth position-relative">
            <img src={Carrito} alt="Carrito" width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
                <span className="visually-hidden">mensajes no leídos</span>
            </span>
        </button>
    )
}

export default Cart;