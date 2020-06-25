import React from 'react';
import './Events.css'

export class Events extends React.Component {

  render() {
    return (
      <div className="Events">
          <div className="Events_text">
          <h1>Deze Week</h1>
          </div>

          <hr className="Events_line"/>

          <div className="Events_schedule">   

            <div className="Events_schedule_day">
              <div className="Events_schedule_day_title">Ma</div>
              <div className="Events_schedule_day_type event1">Event 1</div>
            </div>

            <div className="Events_schedule_day">
              <div className="Events_schedule_day_title">Di</div>
              <div className="Events_schedule_day_type event2">Event 2</div>
            </div>

            <div className="Events_schedule_day">
              <div className="Events_schedule_day_title">Wo</div>
              <div className="Events_schedule_day_type event3">Event 3</div>
            </div>

            <div className="Events_schedule_day">
              <div className="Events_schedule_day_title">Do</div>
              <div className="Events_schedule_day_type event4">Event 4</div>
            </div>

            <div className="Events_schedule_day">
              <div className="Events_schedule_day_title">Vr</div>
              <div className="Events_schedule_day_type event5">Event 5</div>
            </div>

          </div>
          
      </div>
        );
      }
    }
