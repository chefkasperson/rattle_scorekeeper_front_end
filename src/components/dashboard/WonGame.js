import React from 'react'


function WonGame(props) {
  console.log(props)
  return (
    <div className="container section">
      <div className="card z-depth-3">
        <div className="card-content">
          <h5 className="center grey-text text-darken-3">Congratulations {props.winner.name} </h5>
          <h6 className="center grey-text text-darken-3">You are the Winner</h6>
          <p className="grey-text text-darken-3"> Would you like to play another game?</p>
        </div>
        <div className="container center button">
          <button onClick={props.handleClick} className="btn indigo">Play Again</button>
        </div>
      </div>
    </div>  
  )
}

export default WonGame
