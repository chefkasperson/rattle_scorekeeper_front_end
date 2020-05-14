import React from 'react'
import CurrentGames from '../game/CurrentGames'

const Home = () => {
  let games = [{p1: 'Norman', p2: 'Ted', p3: 'Hazel', dealer: 'Hazel', id: '1', p1_score: '24', p2_score: '18', p3_score: '11'}]

  return (
    <div className='container section'>
      <h5 className='card-content white center z-depth-3'>Current Games</h5>
      <CurrentGames games={games} />
    </div>
  )
}

export default Home
