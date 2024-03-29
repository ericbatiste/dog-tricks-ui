import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className='not-found-container'>
      <article>
        <h2>Nothing to see here.</h2>
        <Link to="/" className='not-found-link'>
          Take me Home.
        </Link>
      </article>
    </div>
  )
}