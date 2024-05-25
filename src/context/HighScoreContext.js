
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
        let found = false;
        const updatedScores = scores.map(score => {
            if (score.name === newScore.name) {
                found = true;
                // Update the score only if the new score is higher
                return newScore.score > score.score ? newScore : score;
            }
            return score;
        });
    
        // If the player's name was not found in the existing list, add the new score
        if (!found) {
            updatedScores.push(newScore);
        }
    
        // Sort the scores in descending order based on score
        updatedScores.sort((a, b) => b.score - a.score);
    
        // Update local storage and state
        localStorage.setItem('highScores', JSON.stringify(updatedScores));
        setScores(updatedScores);
    };
    

    const clearScores = () => {
        //console.log('clearing scores');
        localStorage.removeItem('highScores'); // Remove the scores from local storage
        setScores([]); // Reset the scores state to an empty array
    };

    return (
        <HighScoreContext.Provider value={{ scores, addScore , clearScores }}>
            {children}
        </HighScoreContext.Provider>
    );
};

export const useHighScores = () => useContext(HighScoreContext);
