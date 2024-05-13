import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import HighScores from './components/HighScores';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
  path="/game"
  element={<Game />}
/>

        <Route path="/highscores" element={<HighScores />} />
      </Routes>
    </Router>
  );
}

export default App;
