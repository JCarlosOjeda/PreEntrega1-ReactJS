const NavBar = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active text-dark" aria-current="page" href="/">Suculentas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/">De Exterior</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/">De Interior</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/">Aromaticas</a>
      </li>
    </ul>
  )
}

export default NavBar;