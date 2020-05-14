import React from 'react'

function GameCard({game}) {
  return (
    <div className='card z-depth-3 game-card'>
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Player 1: {game.p1} -- {game.p1_score}</span>
        <span className="card-title">Player 2: {game.p2} -- {game.p2_score}</span>
        <span className="card-title">Player 3: {game.p3} -- {game.p3_score}</span>
        <span className="card-title">Dealer: {game.dealer}</span>
      </div>
      
    </div>
  )
}

export default GameCard
