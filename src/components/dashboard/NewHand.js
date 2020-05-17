import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postHand } from '../../store/actions/handActions'
import { withRouter } from 'react-router-dom'

export class NewHand extends Component {
  state = {
    player1: '',
    player2: '',
    player3: '',
    bidder: '',
    bid: '',
    trump: '',
  }
  
  resetState = () => {
    this.setState({
      player1: '',
      player2: '',
      player3: '',
      bidder: '',
      bid: '',
      trump: '',
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let form = e.target
    let game_id = this.props.match.params.id
    let h = this.state
    let hand = {
      ...h,
      game_id: game_id
    }
    form.reset()
    this.resetState()
    this.props.postHand(hand)
    
    
    
    
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
    let game = this.props.game
    return (
      <div className='container white z-depth-3'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="center grey-text text-darken-3">It's {(game && game.dealer.name)}'s Deal</h5>
          <div className="input-field">
            <select 
            name="bid"
            className='browser-default'
            onChange={this.handleChange}
            >
              <option value=''>Bid</option>
              {bidOptions}
            </select>
          </div>
          <div className="input-field">
            <select 
            name="trump"
            className='browser-default'
            onChange={this.handleChange}
            >
              <option value=''>Trump</option>
              {suitOptions}
            </select>
          </div>
          <div className="input-field">
            <select 
            name="bidder"
            className='browser-default'
            onChange={this.handleChange}
            >
              <option value=''>Bidder</option>
              <option value='1'>{(game && game.player_1.name)}</option>
              <option value='2'>{(game && game.player_2.name)}</option>
              <option value='3'>{(game && game.player_3.name)}</option>
            </select>
          </div>
          <div className="input-field">
            <select
            className='browser-default'
            name='player1'
            onChange={this.handleChange}
            ><option value=''>{(game && game.player_1.name)}'s score</option>{scoreOptions}</select>

          </div>
          <div className="input-field">
            <select
              name='player2'
              className='browser-default'
              onChange={this.handleChange}
              ><option value=''>{(game && game.player_2.name)}'s score</option>{scoreOptions}</select>
          </div>
          <div className="input-field">
          <select
            name='player3'
            className='browser-default'
            onChange={this.handleChange}
            ><option value=''>{(game && game.player_3.name)}'s score</option>{scoreOptions}</select>
          </div>
          <div className="input-field">
            <button className="btn indigo lighten-1 z-depth-1">Submit Hand</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, {postHand})(withRouter(NewHand))
