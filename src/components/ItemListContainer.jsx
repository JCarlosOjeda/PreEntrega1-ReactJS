import { useEffect, useState } from "react";
import productos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
            }, 2000);
        })

        promesa.then(data => {
            setItems(data);
            setLoading(false);
        })
    }, [id]);

    return (
        <div className="container my-1">
            <div className="row">
                {loading ? <Loading /> : <ItemList productos={items} />}
            </div >
        </div >
    )
}

export default ItemListContainer;