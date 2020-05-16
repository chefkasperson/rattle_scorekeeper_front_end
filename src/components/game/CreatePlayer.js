import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPlayer } from '../../store/actions/playerActions'

export class CreatePlayer extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let player = this.state
    console.log( this.state)
    this.props.createPlayer(player)
    this.setState({
      name: ''
    })
  }
  render() {
    return (
      <div className="container z-depth-3">
      <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Player</h5>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type='text' id='name' value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <button className="btn indigo lighten-1 z-depth-1">Create Player</button>
        </div>
      </form>
    </div>
    )
  }
}

export default connect(null, {createPlayer})(CreatePlayer)
