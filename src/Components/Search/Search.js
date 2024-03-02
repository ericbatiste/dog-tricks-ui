import './Search.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Search({ handleSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
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

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}