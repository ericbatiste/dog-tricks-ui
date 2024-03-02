import './TrickDetails.css';
import { fetchTrick } from '../../ApiCalls';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmbedVideo from '../EmbedVideo/EmbedVideo';
import PropTypes from 'prop-types';

export default function TrickDetails({ error, setError }) {
  const [selectedTrick, setSelectedTrick] = useState({});
  const [videoId, setVideoId] = useState('');
  const id = useParams().id;

  useEffect(() => {
    const getTrick = async () => {
      try {
        const data = await fetchTrick(id);
        setSelectedTrick(data.trick);
        setVideoId(data.trick.tutorial.split('&')[0].split('=')[1]);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrick();
  }, []);

  if (!selectedTrick) return <></>;

  return (
    <>
      {error ? <p className="error-msg">{error}</p> : 
        <section className="trick-details-container">
          <h2>{selectedTrick.name}</h2>
          <p>Difficulty level: {selectedTrick.difficulty} / 5</p>
          <EmbedVideo videoId={videoId} />
        </section>
      }
    </>
  );
}

TrickDetails.propTypes = {
  setError: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}
