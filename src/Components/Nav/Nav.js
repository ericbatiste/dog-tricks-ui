import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <header>
      <nav>
        <NavLink className="nav-home nav" to="/">Home</NavLink>
        <NavLink className="nav-log nav" to="/tricklog">Trick Log</NavLink>
        <NavLink className="nav-form nav" to="/newtrick">New Trick</NavLink>
      </nav>
    </header>
  )
}