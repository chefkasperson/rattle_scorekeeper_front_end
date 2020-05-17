import React from 'react'

function Scoreboard(props) {
  const game = props.game
  return (
    <div className='container section'>
      <div className="card">
        <div className="card-content white z-depth-3">
          <h3 className='center grey-text text-darken-3'>Scoreboard</h3>
          <table className="striped grey-text text-darken-3">
            <thead>
              <tr>
                <th>{(game && game.player_1.name)}</th>
                <th>{(game && game.player_2.name)}</th>
                <th>{(game && game.player_3.name)}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{(game && game.p1_score)}</td>
                <td>{(game && game.p2_score)}</td>
                <td>{(game && game.p3_score)}</td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
