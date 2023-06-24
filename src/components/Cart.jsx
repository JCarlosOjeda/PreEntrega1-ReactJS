import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "./img/trash.svg";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-12 text-center">
                    <div className="alert alert-danger" role="alert">
  No hay productos..... <Link Link to={"/"} className="alert-link red">Hace click aca </Link>.... Y empeza a comprar !!!
</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="tabla">Productos en tu carrito</h1>
                </div>
            </div>
            <div className="row">
                <div className="col table-responsive-sm ">
                    <table className="table tabla">
                        <tbody>
                            <tr>
                                <td colSpan={4}>&nbsp;</td>
                                <td className="text-end "><button className="btn btn-light tabla" onClick={() => {clear()}} title="Vaciar Carrito">Vaciar Carrito</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img className="imgTabla" src={item.imagen} alt={item.titulo} /></td>
                                        <td className="align-middle">{item.titulo}</td>
                                        <td className="align-middle">{item.cantidad} x ${item.precio}</td>
                                        <td className="text-center align-middle">${item.cantidad * item.precio}</td>
                                        <td className="text-end align-middle"><button className="btn btn-light" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img className="trashTabla" src={trash} alt="Eliminar Producto"  /></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3} className="text-end align-middle">Total a Pagar</td>
                                <td className="text-center align-middle">${sumTotal()}</td>
                                <td className="text-end align-middle"><Link to={"/checkout"} className="btn bg-success-subtle  tabla">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;