import './index.css'
import {Link} from 'react-router-dom'
const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li className="nav-link">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
        <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header;
