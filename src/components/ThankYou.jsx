import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
    const { orderId } = useParams();

    return (
        <div className="container my-5 bg-light">
            <div className="row">
                <div className="col text-center card p-5">
                    <h1 className="fs-1 text">¡Gracias por tu Compra!</h1>
                    <p>Tu Orden de Compra es: <b>{orderId}</b></p>
                    <p><Link to={"/"} className="btn bg-success-subtle fw-bold fs-5  mt-3">Volver a la pagina Principal</Link></p>
                    <p className="fst-italic fw-bold">Nos vamos a comunicar por Email o WhatsApp para coordinar el envío</p>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;