import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/first_page" className="nav-link">First page</Link>
            </li>
            <li className="nav-item">
              <Link to="/second_page" className="nav-link">Second page</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
