import PropTypes from 'prop-types';
import './EmbedVideo.css';

export default function EmbedVideo({ videoId }) {
  return (
    <div className="video-container">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

EmbedVideo.propTypes = {
  videoId: PropTypes.string.isRequired
}
