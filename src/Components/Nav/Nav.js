import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tricklog">Trick Log</NavLink>
        <NavLink to="/newtrick">New Trick</NavLink>
      </nav>
    </header>
  )
}