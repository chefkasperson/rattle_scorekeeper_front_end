import React from 'react'
import { Link } from 'react-router-dom'

const GameList = (props) => {

  let games = props.games

  let renderGames = games.map(game => (
    <li><Link to={`/games/${game.id}`} >
      {game.player_1.name}  {game.p1_score} -- {game.player_2.name}  {game.p2_score} -- {game.player_3.name}  {game.p3_score}
      </Link></li>
  ))


  return (
    <div className='GameList'>
      <ul className="center">
        {renderGames}
      </ul>
    </div>
  )
}

export default GameList
