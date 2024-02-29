import './TrickDetails.css';
import { fetchTrick } from '../../ApiCalls';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TrickDetails() {
  const [selectedTrick, setSelectedTrick] = useState({});
  const id = useParams().id 

  useEffect(() => {
    const getTrick = async () => {
      try {
        const data = await fetchTrick(id);
        setSelectedTrick(data.trick);
      } catch (error) {
        console.log(error);
      }
    }
    getTrick();
  }, [])
  
  return (
    <section className='trick-details-container'>
      <h2>{selectedTrick.name}</h2>
      <p>difficulty: {selectedTrick.difficulty}</p>
      <p>{selectedTrick.tutorial}</p>
    </section>
  )
}
