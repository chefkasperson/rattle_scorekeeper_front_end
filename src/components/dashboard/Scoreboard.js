import React from 'react'

function Scoreboard() {
  return (
    <div className='container section'>
      <div className="card-content white z-depth-3">
        <h3 className='center'>Scoreboard</h3>
        <table className="striped">
          <thead>
            <tr>
              <th>Player 1</th>
              <th>Player 2</th>
              <th>Player 3</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>0</td>
              <td>5</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>7</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Scoreboard
