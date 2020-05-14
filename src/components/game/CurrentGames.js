import React from 'react'
import GameCard from './GameCard'

const CurrentGames = ({games}) => {
  return (
    <div className="section">
      { games && games.map(game => {
        return (
          <GameCard game={game} key={game.id} />
        )
      })}
    </div>
  )
}

export default CurrentGames