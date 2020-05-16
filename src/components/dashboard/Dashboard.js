import React, { Component } from 'react'
import Scoreboard from './Scoreboard'
import NewHand from './NewHand'
import { connect } from 'react-redux'

export class Dashboard extends Component {

  render() {
    const id = (this.props.match.params.id)
    const game = this.props.games.find((game) => (game.id == id))
    console.log(game)
    return (
      <div className='dashboard'>
        <div className="row">
          <div className="col s12 m6">
            <NewHand game={game} />
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
  return {
    games: state.gamesReducer
  }
}

export default connect(mapStateToProps)(Dashboard)
