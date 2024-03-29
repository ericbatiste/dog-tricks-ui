import './Form.css';
import { postTrick } from '../../ApiCalls';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ addTrick }) {
  const [formTitle, setFormTitle] = useState(`Add a New Trick to Fido's Log!`);
  const [alert, setAlert] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    difficulty: '',
    tutorial: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormComplete = () => {
    return !Object.values(formData).some(value => value === '')
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!isFormComplete()) setAlert('Please fill out all inputs');
    const addNewTrick = async () => {
      try {
        const data = await postTrick(formData);
        setFormData(data);
        addTrick(data);
        renderSuccessTitle();
        setFormData({ name: '', difficulty: '', tutorial: '' })
      } catch (error) {
        console.log(error)
      }
    } 
    addNewTrick();
  };

  const renderSuccessTitle = () => {
    setFormTitle('New trick added!');
    setTimeout(() => {
      setFormTitle(`Add a New Trick to Fido's Log!`)
    }, 5000)
  }

  return (
    <section className="new-trick-form-container">
      <form className="new-trick-form" onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <div>
          <label htmlFor="name">Enter trick name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            autoComplete='off'
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
            autoComplete='off'
            onChange={handleInputChange}
          />
        </div>
        <p className='alert'>{alert}</p>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

Form.propTypes = {
  addTrick: PropTypes.func.isRequired
}
