import { useEffect, useState } from "react";
//import productos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getFirestore, collection, getDocs, where, query, /*addDoc*/ } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    //Como acceder a la coleccion desde Firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
                setLoading(false);
            } else {
                console.log("Error No Hay productos en la coleccion!!");
            }
        });
    }, [id]);

    /* Proceso de Importacion
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        productos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });
        console.log("Productos Cargados en Firestore");
    }, []);*/

    return (
        <div className="container my-1">
            <div className="row">
                {loading ? <Loading /> : <ItemList productos={items} />}
            </div>
        </div>
    )
}


export default ItemListContainer;