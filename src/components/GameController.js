import React from 'react'
import { useLocation } from 'react-router-dom'
import Game from './Game'
import { Navigate } from 'react-router-dom'







/**
 * Just a simple "validation" component that checks if the gameSettings are passed in the location state. 
 * If they are, it renders the Game component with the gameSettings. 
 * If not, it redirects to "/notfound
 * @returns {JSX.Element} The rendered game component.
 * 
 *  */ 
const GameController = () => {



const location = useLocation();

  return (
    location.state?.gameSettings?<Game gameSettings={location.state.gameSettings} /> : <Navigate to="/notfound" />
       
  )
}

export default GameController