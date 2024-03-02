import './TrickLog.css';
import TrickCard from '../TrickCard/TrickCard';
import Search from '../Search/Search';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function TrickLog({ trickLog, error }) {
  const [filteredTricks, setFilteredTricks] = useState(null)

  const handleSearch = (query) => {
    const filtered = trickLog.filter(trick => {
      return trick.name.toLowerCase().includes(query.toLowerCase())
    });
    setFilteredTricks(filtered);
  }

  const fidosTricks = (tricks) => {
    if (!tricks.length) {
      return `No tricks by that name, please adjust your search or add a new trick to the Trick Log`; 
    }
    return tricks.map(trick => {
      return (
        <TrickCard 
          name={trick.name}
          id={trick.id}
          key={trick.id}
        />
      )
    })
  }
  
  if (!trickLog || error) {
    return <p className='error-msg'>{error}</p>
  }
  
  return (
    <div className='trick-log-container'>
      <Search handleSearch={handleSearch}/>
      <section className='trick-list'>
        { !filteredTricks ? fidosTricks(trickLog) : fidosTricks(filteredTricks) }
      </section>
    </div>
  )
}

TrickLog.propTypes = {
  error: PropTypes.string.isRequired,
  trickLog: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      difficulty: PropTypes.number.isRequired,
      tutorial: PropTypes.string.isRequired,
    })
  )
}