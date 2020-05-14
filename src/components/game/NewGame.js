import React, { Component } from 'react'

export class NewGame extends Component {
  state = {
    player1: '',
    player2: '',
    player3: '',
    dealer: '1',
    players: [{name: 'Norman', id: 3}, {name: 'Ted', id: 1}, {name: 'Hazel', id: 2}]
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    let playersList = this.state.players.map(function(player){ 
      return (<option key={player.id} value={player.name}>{player.name}</option>)})
    return (
      <div className='container white z-depth-3'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="center grey-text text-darken-3">New Game</h5>
          <div className="input-field">
            <select
            className='browser-default'
            name='player1'
            onChange={this.handleChange}
            ><option disabled selected value=''>choose player 1</option>{playersList}</select>

          </div>
          <div className="input-field">
            <select
              name='player2'
              className='browser-default'
              onChange={this.handleChange}
              ><option disabled selected value=''>choose player 2</option>{playersList}</select>
          </div>
          <div className="input-field">
          <select
            name='player3'
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

export default NewGame