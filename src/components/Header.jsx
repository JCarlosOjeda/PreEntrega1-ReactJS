import NavBar from "./NavBar";
import Cart from "./Cart";
import logo2 from "./img/logo2.jpg";
import holatips from "./img/holatips.jpg";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-success-subtle p-3">
                <div className="col-md-4">
                    <img src={logo2} alt="logo2" width={60} />
                </div>
                <div className="col-md-4 text-center" >
                    <h1>HOLA PATIO</h1>
                </div>
                <div className="col-md-4 text-end">
                    <a href="https://www.instagram.com/stories/highlights/18071076955242533/" target={"blank"} className="text-dark text-decoration-none"><img src={holatips} alt="holatips" width={60} /></a>
                </div>
            </div>
            <div className="row bg-success-subtle p-3">
                <div className="col-md-3">
                </div>
                <div className="col-md-6 text-start" >
                    <NavBar />
                </div>
                <div className="col-md-3 text-end">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Header;