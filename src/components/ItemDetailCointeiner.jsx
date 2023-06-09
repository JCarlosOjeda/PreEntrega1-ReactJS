import { useEffect, useState } from "react";
//import productos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailCointeiner = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setItem({ id: resultado.id, ...resultado.data() });
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            {loading ? <Loading /> : <ItemDetail producto={item} />}
        </>
    )
}

export default ItemDetailCointeiner;