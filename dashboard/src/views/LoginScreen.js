import React from 'react';
import {LoginBox} from '../components/LoginBox';


export class LoginScreen extends React.Component {



  render() {
    return (
      <div style={{backgroundColor:"#e30514", height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <LoginBox />

          <div className="copyright">
              <p> Copyright &copy; 2020 ~ Fussball Organiser</p>
          </div>
      </div>
    );
  }
}
