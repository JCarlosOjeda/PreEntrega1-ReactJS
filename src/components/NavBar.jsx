import Cart from "./Cart";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="row bg-success-subtle p-3">

      <div className="col-md-8" >
        <div>
          <ul className="nav justify-content-center navBar ">
            <li className="nav-item">
              <NavLink className="nav-link active text-dark" aria-current="page" to={"/destacadas"}>Destacadas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to={"/categoria/suculentas"}>Suculentas/Cactus</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to={"/categoria/interior"}>De Interior</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to={"/categoria/macetas"}>Macetas</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 text-end">
        <Cart />
      </div>
    </div>

  )
}

export default NavBar;