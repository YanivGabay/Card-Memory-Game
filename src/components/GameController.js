import React from 'react'
import { useLocation } from 'react-router-dom'
import Game from './Game'
import { Navigate } from 'react-router-dom'

const GameController = () => {

const location = useLocation();
//console.log(location.state?.gameSettings)
  return (
    location.state?.gameSettings?<Game gameSettings={location.state.gameSettings} /> : <Navigate to="/notfound" />
       
  )
}

export default GameController