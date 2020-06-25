import React from 'react';
import './PreGames.css'

export class PreGames extends React.Component {

  render() {
    return (
      <div className="PreGames">
          <div className="PreGames_text">
          <h1>Vorige Wedstrijden</h1>
          </div>

          <hr className="PreGames_line"/>

          <div className="PreGames_list">

            <div className="PreGames_item"> 
              <div className="PreGames_gametype">B</div>
              <div className="PreGames_opponent">Tegenstander</div>
              <div className="PreGames_result">W</div>
            </div>
            <div className="PreGames_item"> 
              <div className="PreGames_gametype">B</div>
              <div className="PreGames_opponent">Tegenstander</div>
              <div className="PreGames_result">W</div>
            </div>
            <div className="PreGames_item"> 
              <div className="PreGames_gametype">B</div>
              <div className="PreGames_opponent">Tegenstander</div>
              <div className="PreGames_result">W</div>
            </div>
            <div className="PreGames_item"> 
              <div className="PreGames_gametype">B</div>
              <div className="PreGames_opponent">Tegenstander</div>
              <div className="PreGames_result">W</div>
            </div>
            <div className="PreGames_item"> 
              <div className="PreGames_gametype">B</div>
              <div className="PreGames_opponent">Tegenstander</div>
              <div className="PreGames_result">W</div>
            </div>          

          </div>

          
      </div>
        );
      }
    }