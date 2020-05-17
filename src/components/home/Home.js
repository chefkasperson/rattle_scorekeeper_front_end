import React from 'react'
import GameList from '../game/GameList'
import { connect } from 'react-redux'

const Home = (props) => {
  console.log(props)
  let finishedGames = props.games.filter((game) => (game.status === 'finished'))
  let incompleteGames = props.games.filter((game) => (game.status === 'incomplete'))
  console.log(finishedGames, incompleteGames)
  return (
    <div className='home'>
      <div className="container section">
        <div className="card z-depth-3">
          <div className="card-content">
            <h5 className="center grey-text text-darken-3">Unfinished Games </h5>
            <GameList games={incompleteGames} />
          </div>
        </div>
      </div>
      <div className="container section">
        <div className="card z-depth-3">
          <div className="card-content">
            <h5 className="center grey-text text-darken-3">Finished Games </h5>
            <GameList games={finishedGames} />
          </div>
        </div>
      </div>
    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    games: state.gamesReducer
  }
}

export default connect(mapStateToProps)(Home)
