import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <>
            <div className="col-md-4 my-4" >
                <div className="card" >
                    <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                        <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
                        <div className="card-body">
                            <h3>{producto.titulo}</h3>
                            <p className="card-text">{producto.descripcion} <br /><b>${producto.precio}</b></p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item;