import './TrickDetails.css';
import { fetchTrick } from '../../ApiCalls';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TrickDetails({ error, setError }) {
  const [selectedTrick, setSelectedTrick] = useState({});
  const id = useParams().id 

  useEffect(() => {
    const getTrick = async () => {
      try {
        const data = await fetchTrick(id);
        setSelectedTrick(data.trick);
      } catch (error) {
        setError(error.message)
      }
    }
    getTrick();
  }, [])

  return (
    <>
    { error ? <p className='error-msg'>{ error }</p> :
      <section className='trick-details-container'>
        <h2>{selectedTrick.name}</h2>
        <p>difficulty: {selectedTrick.difficulty}</p>
        <p>{selectedTrick.tutorial}</p>
      </section>
    }
    </>
  )
}
