import React, { Component } from 'react'
import { createGame } from '../../store/actions/gameActions'
import { connect } from 'react-redux'
import CreatePlayer from './CreatePlayer'

export class NewGame extends Component {
  state = {
    player_1: 'Player 1',
    player_2: 'Player 2',
    player_3: 'Player 3',
    dealer: '1',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    let game = this.state
    e.preventDefault()
    this.props.createGame(game, this.props.history)
      .then(r => {
        if (r) {
          this.props.history.push(`/games/${r.id}`)
        }
      })
  }

  render() {
    let playersList
    if (this.props.players){
      playersList = this.props.players.map(function(player){ 
        return (<option key={player.id} value={player.name}>{player.name}</option>)})
    }
    return (
      <>
        <div className='container white z-depth-3'>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="center grey-text text-darken-3">New Game</h5>
            <div className="input-field">
              <select
              className='browser-default'
              name='player_1'
              onChange={this.handleChange}
              ><option value=''>choose player 1</option>{playersList}</select>

            </div>
            <div className="input-field">
              <select
                name='player_2'
                className='browser-default'
                onChange={this.handleChange}
                ><option value=''>choose player 2</option>{playersList}</select>
            </div>
            <div className="input-field">
            <select
              name='player_3'
              className='browser-default'
              onChange={this.handleChange}
              ><option value=''>choose player 3</option>{playersList}</select>
            </div>
            <div className="input-field">
              <select 
              name="dealer"
              className='browser-default'
              onChange={this.handleChange}
              >
                <option value=''>Dealer</option>
                <option value='1'>{this.state.player_1}</option>
                <option value='2'>{this.state.player_2}</option>
                <option value='3'>{this.state.player_3}</option>
              </select>
            </div>
            <div className="input-field">
              <button className="btn indigo lighten-1 z-depth-1">Create</button>
            </div>
          </form>
        </div>
        <div className="container section">
          <CreatePlayer />
        </div>
      </>  
    )
  }
}
const mapStateToProps = (state) => {
  return {
    players: state.playersReducer
  }
}

export default connect(mapStateToProps, { createGame })(NewGame)
