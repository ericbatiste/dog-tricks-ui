import './Home.css';
import PropTypes from 'prop-types';

export default function Home({ error }) {
  return (
    <>
      { error && <p className='error-msg'>{error}</p> }
      <div className='home-container'>
        <article>
          <h1>Fido's Trick Log</h1>
          <p>For the good boy in all of us.</p>
        </article>
      </div>
    </>
  )
}

Home.propTypes = {
  error: PropTypes.string.isRequired
}