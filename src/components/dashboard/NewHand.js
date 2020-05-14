import React, { Component } from 'react'

export class NewHand extends Component {
  state = {
    player1: '',
    player2: '',
    player3: '',
    bidder: '',
    bid: '',
    trump: '',
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
    let bids = ['2', '3', '4', '5', '6', '7', '8', 'moon']
    let bidOptions = bids.map(function(bid){ 
      return (<option key={bid} value={bid}>{bid}</option>)})
    let scores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 'pass']
    let scoreOptions = scores.map(function(score){ 
      return (<option key={score} value={score}>{score}</option>)})
    let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs', 'no-trump']
    let suitOptions = suits.map(function(suit){
      return (<option key={suit} value={suit}>{suit}</option>)
    })

    return (
      <div className='container white z-depth-3'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="center grey-text text-darken-3">New Hand</h5>
          <div className="input-field">
            <select 
            name="bid"
            className='browser-default'
            onChange={this.handleChange}
            >
              <option disabled selected value=''>Bid</option>
              {bidOptions}
            </select>
          </div>
          <div className="input-field">
            <select 
            name="trump"
            className='browser-default'
            onChange={this.handleChange}
            >
              <option disabled selected value=''>Trump</option>
              {suitOptions}
            </select>
          </div>
          <div className="input-field">
            <select 
            name="bidder"
            className='browser-default'
            onChange={this.handleChange}
            >
              <option disabled selected value=''>Bidder</option>
              <option value='1'>Player 1</option>
              <option value='2'>Player 2</option>
              <option value='3'>Player 3</option>
            </select>
          </div>
          <div className="input-field">
            <select
            className='browser-default'
            name='player1'
            onChange={this.handleChange}
            ><option disabled selected value=''>player 1 score</option>{scoreOptions}</select>

          </div>
          <div className="input-field">
            <select
              name='player2'
              className='browser-default'
              onChange={this.handleChange}
              ><option disabled selected value=''>player 2 score</option>{scoreOptions}</select>
          </div>
          <div className="input-field">
          <select
            name='player3'
            className='browser-default'
            onChange={this.handleChange}
            ><option disabled selected value=''>player 3 score</option>{scoreOptions}</select>
          </div>
          <div className="input-field">
            <button className="btn indigo lighten-1 z-depth-1">Submit Hand</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewHand
