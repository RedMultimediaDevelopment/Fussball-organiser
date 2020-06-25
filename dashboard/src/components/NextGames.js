import React from 'react';
import './NextGames.css'

export class NextGames extends React.Component {

  render() {
    return (
      <div className="NextGames">
          <div className="NextGames_text">
          <h1>Volgende Wedstrijden</h1>
          </div>
          
          <hr className="NextGames_line"/>
         

          <div className="NextGames_list">

            <div className="NextGames_item"> 
              <div className="NextGames_gametype">B</div>
              <div className="NextGames_opponent">Tegenstander</div>
            </div>
            <div className="NextGames_item"> 
              <div className="NextGames_gametype">B</div>
              <div className="NextGames_opponent">Tegenstander</div>
            </div>
            <div className="NextGames_item"> 
              <div className="NextGames_gametype">B</div>
              <div className="NextGames_opponent">Tegenstander</div>
            </div>
            <div className="NextGames_item"> 
              <div className="NextGames_gametype">B</div>
              <div className="NextGames_opponent">Tegenstander</div>
            </div>
            <div className="NextGames_item"> 
              <div className="NextGames_gametype">B</div>
              <div className="NextGames_opponent">Tegenstander</div>
            </div>           

          </div>


          
      </div>
        );
      }
    }
