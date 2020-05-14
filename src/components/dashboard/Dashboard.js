import React, { Component } from 'react'
import Scoreboard from './Scoreboard'
import NewHand from './NewHand'

export class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <div className="row">
          <div className="col s12 m6">
            <NewHand />
          </div>
          <div className="col s12 m5 offset-m1">
            <Scoreboard />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
