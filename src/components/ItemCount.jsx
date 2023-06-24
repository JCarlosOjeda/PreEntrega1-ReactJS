import { useEffect, useState } from "react";
//import Cart from "./Cart";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
            console.log("Agregaste: " + items + " Productos al carrito");
            console.log("Te quedan:" + (itemStock - items) + " Disponibles");
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    const stockMessage = itemStock > 0 ? "Tenemos" : "Pronto Vamos a Reponer";
    const stockMessageClass = itemStock > 0 ? "hayStock" : "sinStock";

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light card" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light card">{items}</button>
                        <button type="button" className="btn btn-light card" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn bg-success-subtle fs-4 col-5 text-center">VER EL CARRITO</Link>  : <button type="button" className="btn bg-success-subtle fs-4" onClick={addToCart}>AGREGAR AL CARRITO</button>}
                    <p className={stockMessageClass}>{stockMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
