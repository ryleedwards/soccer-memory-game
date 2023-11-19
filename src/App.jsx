import { useState } from 'react';
import Navbar from './components/Navbar';
import Score from './components/Score';
import Board from './components/Board';

function App() {
  return (
    <>
      <Navbar />
      <Score />
      <Board />
    </>
  );
}

export default App;
