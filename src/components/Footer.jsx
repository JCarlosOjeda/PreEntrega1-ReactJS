import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Youtube from "./img/youtube.svg";
import Twitter from "./img/twitter.svg";

const Footer = () => {
    return (
        <div className="container-fluid bg-success-subtle text-dark text-center py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Buscar en Tienda</h3>
                    </div>
                    <div className="col-md-3">
                        <h3>Quienes Somos</h3>
                    </div><div className="col-md-3">
                        <h3>Ayuda</h3>
                    </div><div className="col-md-3">
                        <a href="https://www.facebook.com/holapatio" target={"blank"} className="me-3" ><img src={Facebook} alt={"Facebook"} width={28} /></a>
                        <a href="https://www.instagram.com/holapatio_/" target={"blank"} className="me-3"><img src={Instagram} alt={"Instagram"} width={28} /></a>
                        <a href="/" className="me-3"><img src={Youtube} alt={"Yotube"} width={28} /></a>
                        <a href="/" className="me-3"><img src={Twitter} alt={"Twitter"} width={28} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;