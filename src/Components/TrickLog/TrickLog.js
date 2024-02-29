import './TrickLog.css';
import TrickCard from '../TrickCard/TrickCard';
import Search from '../Search/Search';
import { useState } from 'react';

export default function TrickLog({ trickLog }) {
  const [filteredTricks, setFilteredTricks] = useState(null)

  const handleSearch = (query) => {
    const filtered = trickLog.filter(trick => {
      return trick.name.toLowerCase().includes(query.toLowerCase())
    });
    setFilteredTricks(filtered);
  }

  const fidosTricks = (tricks) => {
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
  
  if (!trickLog) return <></>
  
  return (
    <div className='trick-log-continer'>
      <Search onSearch={handleSearch}/>
      <section className='trick-list'>
        {!filteredTricks ? fidosTricks(trickLog) : fidosTricks(filteredTricks)}
      </section>
    </div>
  )
}