import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <header>
      <h1>Fido's Trick Log</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tricklog">Trick Log</NavLink>
      </nav>
    </header>
  )
}