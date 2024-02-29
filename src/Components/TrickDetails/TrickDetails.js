import './TrickDetails.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function TrickDetails() {
  const [selectedTrick, setSelectedTrick] = useState({});
  const id = useParams().id 

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/dog-tricks/${id}`)
    .then(res => res.json())
    .then(data => {
      setSelectedTrick(data.trick)
    })
    .catch(err => console.error(err))
  }, [])
  
  return (
    <section className='trick-details-container'>
      <h2>{selectedTrick.name}</h2>
      <p>difficulty: {selectedTrick.difficulty}</p>
      <p>{selectedTrick.tutorial}</p>
    </section>
  )
}
