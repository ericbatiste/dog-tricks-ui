import './TrickCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

TrickCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
