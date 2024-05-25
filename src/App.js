import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import HighScores from './components/HighScores';
import NotFound from './components/NotFound';
import { HighScoreProvider } from './context/HighScoreContext';
import GameController from './components/GameController';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import GameSettings from './components/GameSettings';


/**
 * The main component of the application.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <HighScoreProvider>

      <Router>
        <Home>
          <Routes>
            <Route path="/" element={<GameSettings />} />
            <Route path="/highscores" element={<HighScores />} />
            <Route path="/game" element={<GameController />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />  {/* Catch-all for any undefined routes */}
          </Routes>
        </Home>
      </Router>

    </HighScoreProvider>
  );
}

export default App;
