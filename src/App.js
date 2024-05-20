import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import HighScores from './components/HighScores';
import NotFound from './components/NotFound';
import { HighScoreProvider } from './context/HighScoreContext';
import GameController from './components/GameController';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
 //<Route path="/game" element={<Game />} />
function App() {
  return (
    <HighScoreProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/highscores" element={<HighScores />} />
        <Route path="/game" element ={<GameController />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />  {/* Catch-all for any undefined routes */}
      </Routes>
    </Router>
    </HighScoreProvider>
  );
}

export default App;
