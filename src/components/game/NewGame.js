import React, { Component } from 'react'
import { createGame } from '../../store/actions/gameActions'
import { connect } from 'react-redux'

export class NewGame extends Component {
  state = {
    player_1: '',
    player_2: '',
    player_3: '',
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
    console.log(game)
    this.props.createGame(game, this.props.history)
      .then(this.props.history.push(`/games/${game.id}`) )
  }

  render() {
    console.log(this.props)
    let playersList = this.props.players.map(function(player){ 
      return (<option key={player.id} value={player.name}>{player.name}</option>)})
    return (
      <div className='container white z-depth-3'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="center grey-text text-darken-3">New Game</h5>
          <div className="input-field">
            <select
            className='browser-default'
            name='player_1'
            onChange={this.handleChange}
            ><option disabled selected value=''>choose player 1</option>{playersList}</select>

          </div>
          <div className="input-field">
            <select
              name='player_2'
              className='browser-default'
              onChange={this.handleChange}
              ><option disabled selected value=''>choose player 2</option>{playersList}</select>
          </div>
          <div className="input-field">
          <select
            name='player_3'
            className='browser-default'
            onChange={this.handleChange}
            ><option disabled selected value=''>choose player 3</option>{playersList}</select>
          </div>
          <div className="input-field">
            <select 
            name="dealer"
            className='browser-default'
            onChange={this.handleChange}
            >
              <option disabled selected value=''>Dealer</option>
              <option value='1'>Player 1</option>
              <option value='2'>Player 2</option>
              <option value='3'>Player 3</option>
            </select>
          </div>
          <div className="input-field">
            <button className="btn indigo lighten-1 z-depth-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    players: state.playersReducer.players
  }
}

export default connect(mapStateToProps, { createGame })(NewGame)
