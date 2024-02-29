import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import TrickLog from '../TrickLog/TrickLog';
import Form from '../Form/Form';
import TrickDetails from '../TrickDetails/TrickDetails';
import { fetchTricks } from '../../ApiCalls';
import { useState, useEffect } from 'react';

export default function App() {
  const [trickLog, setTrickLog] = useState([]);

  const addTrick = (newTrick) => {
    setTrickLog([...trickLog, newTrick])
  }

  useEffect(() => {
    const getTricks = async () => {
      try {
        const data = await fetchTricks();
        setTrickLog(data.tricks);
      } catch (error) {
        console.log(error);
      }
    }
    getTricks();
  }, [])

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/tricklog" element={ <TrickLog trickLog={trickLog}/> }/>
        <Route path="/trickdetails/:id" element={ <TrickDetails /> }/>
        <Route path="/newtrick" element={ <Form addTrick={addTrick}/> }/>
        <Route path="*"/>
      </Routes>
    </main>
  );
}
