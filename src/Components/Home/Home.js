import './Home.css';

export default function Home({ error }) {
  return (
    <>
      { error && <p className='error-msg'>{error}</p> }
      <div className='home-container'>
        <article>
          <h1>Fido's Trick Log</h1>
        </article>
      </div>
    </>
  )
}