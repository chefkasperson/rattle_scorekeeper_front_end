import React, { Component } from 'react'
import Scoreboard from './Scoreboard'
import NewHand from './NewHand'
import { connect } from 'react-redux'
import WonGame from './WonGame'
import { createGame } from '../../store/actions/gameActions'

export class Dashboard extends Component {
  handleClick = (game, winner) => {
    console.log(game, winner)
    let dealer
    if (game.player_1.id == winner.id) {
      dealer = '1'
    } else if (game.player_2.id == winner.id) {
      dealer = '2'
    } else {
      dealer = '3'
    }
    let newGame = {
      player_1: game.player_1.name,
      player_2: game.player_2.name,
      player_3: game.player_3.name,
      dealer: dealer
    }
    this.props.createGame(newGame)
      .then(r => {
        console.log(r)
        this.props.history.push(`/games/${r.id}`)} 
      )

  }
  render() {
    const id = (this.props.match.params.id)
    const game = this.props.games.find((game) => (game.id == id))
    const players = this.props.players
    let gameCheck 
    if (game && game.status === "incomplete" ){
      gameCheck = <NewHand game={game} />
    } else if (game && players && game.status === 'finished') {
       console.log(players)
      let winner = players.find((player) => player.id == game.winner_id)
      gameCheck = <WonGame game={game} winner={winner} handleClick={() => this.handleClick(game,winner)} />
    }
      
    
    return (
      <div className='dashboard'>
        <div className="row">
          <div className="col s12 m6">
            {gameCheck}
          </div>
          <div className="col s12 m5 offset-m1">
            <Scoreboard game={game} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    games: state.gamesReducer,
    players: state.playersReducer
  }
}

export default connect(mapStateToProps, { createGame })(Dashboard)
