import React from 'react'

function About() {
  return (
    <div className="container section">
      <div className="card z-depth-3">
        <div className="card-content">
        <h5 className="center grey-text text-darken-3">About</h5>
        <p className="grey-text text-darken-3">Rattle is a card game that has been played by my family for generations. The game is played with a smaller deck (9 through ace) and can be played with 3 or 4 players. The game is broken up into hands where players take turns bidding with the player winning the bid declaring trump. After the hand tricks are counted and the first player to reach the target score wins.</p>
        <br/>
        <p className="grey-text text-darken-3">While I am unsure of the origin of the game it is similar to and likely an off-shoot of the game Euchre, which uses the same deck and bidding pattern. </p>
        <br/>
        <p className="grey-text text-darken-3">This scorekeeper was made to help my family keep score when traveling and without pen and paper handy. It is currently only supporting 3 player games but will be expanded to include 4 player games soon. </p>
        </div>
      </div>
    </div>
  )
}

export default About
