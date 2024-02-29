import './Form.css';
import { useState } from 'react';

export default function Form({ addTrick }) {
  const [formData, setFormData] = useState({
    name: '',
    difficulty: '',
    tutorial: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/api/v1/dog-tricks', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(postRes => {
        addTrick(postRes);
        setFormData({ name: '', difficulty: '', tutorial: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <section className="new-trick-form-container">
      <form className="new-trick-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter trick name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="difficulty">Select difficulty:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <option value="">0 - 5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div>
          <label htmlFor="tutorial">Link to tutorial:</label>
          <input
            type="text"
            id="tutorial"
            name="tutorial"
            value={formData.tutorial}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
