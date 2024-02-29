import './TrickCard.css';
import { Link } from 'react-router-dom';

export default function TrickCard({ name, id }) {
  return (
    <Link
      to={`/trickdetails/${id}`}
      className='trick-card'
    >
      <h3>{name}</h3>
    </Link>
  )
}
