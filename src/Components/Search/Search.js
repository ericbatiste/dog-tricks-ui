import { useState } from 'react';
import './Search.css';

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit(e);
  }

  return (
    <form 
      className='search-form'
      onSubmit={handleChange}
    >
      <input 
        type='text'
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='Search for a trick!'
      />
    </form>
  )
}