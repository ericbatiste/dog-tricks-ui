import './TrickCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TrickCard({ name, difficulty, id }) {
  return (
    <Link
      to={`/trickdetails/${id}`}
      className='trick-card'
    >
      <h3>{name}</h3>
      <p>Difficulty: {difficulty}</p>
    </Link>
  )
}

TrickCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
