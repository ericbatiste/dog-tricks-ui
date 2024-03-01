import './Home.css';

export default function Home({ error }) {

  return (
    <div className='home-container'>
      <article>
        { error ? <p className='error-msg'>{error}</p> : console.log('hi')}
      </article>
    </div>
  )
}