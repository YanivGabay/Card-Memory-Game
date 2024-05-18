
// This context will be used to store and manage the high scores of the game. 
//It will provide a way to add a new score and retrieve the list of high scores. 
//The high scores will be stored in the local storage of the browser.
// to use : import { HighScoreProvider } from './context/HighScoreContext';
import React, { createContext, useContext, useState, useEffect } from 'react';

const HighScoreContext = createContext();

export const HighScoreProvider = ({ children }) => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
        setScores(highScores);
    }, []);

    const addScore = (newScore) => {
        const updatedScores = [...scores, newScore].sort((a, b) => b.score - a.score);
        localStorage.setItem('highScores', JSON.stringify(updatedScores));
        setScores(updatedScores);
    };

    const clearScores = () => {
        console.log('clearing scores');
        localStorage.removeItem('highScores'); // Remove the scores from local storage
        setScores([]); // Reset the scores state to an empty array
    };

    return (
        <HighScoreContext.Provider value={{ scores, addScore }}>
            {children}
        </HighScoreContext.Provider>
    );
};

export const useHighScores = () => useContext(HighScoreContext);
