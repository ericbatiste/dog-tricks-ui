import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import TrickLog from '../TrickLog/TrickLog';
import TrickDetails from '../TrickDetails/TrickDetails';
import { useState, useEffect } from 'react';

export default function App() {
  const [trickLog, setTrickLog] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/dog-tricks')
    .then(res => res.json())
    .then(data => setTrickLog(data.tricks))
    .catch(err => console.error(err))
  }, [])

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/tricklog" element={ <TrickLog trickLog={trickLog}/> }/>
        <Route path="/trickdetails/:id" element={ <TrickDetails /> }/>
        <Route path="*"/>
      </Routes>
    </main>
  );
}
