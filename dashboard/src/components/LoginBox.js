import React from 'react';
import './LoginBox.css'
import { withRouter } from "react-router";


const LoginInput = ({onChange, value, placeholder, password}) => (
  <div className="wrap-input100 validate-input m-b-10" data-validate="password is required">
    <input onChange={onChange} password={password} value={value} class="input100 placeholder0 s1-txt1" type="text" placeholder={placeholder} />
    <span class="focus-input100"></span>
  </div>
)


class LoginBoxComponent extends React.Component {


 constructor(props){
   super(props);
   this.state = { Username: '',password: '' };
 }


 handleChange = ({ target }) => {
    this.setState({ [target.password]: target.value });
 };





 handleValidation(password,Username){
     let fields = { password, Username };
     let errors = {};
     let formIsValid = true;

     //password
     if(!fields["password"]){
        formIsValid = false;
        return this.notify("password cannot be empty");

     }

     if(typeof fields["password"] !== "undefined"){
        if(!fields["password"].match(/^[a-zA-Z]/)){
           formIsValid = false;
           return this.notify("password must only have letters");
        }
     }

     //Username
     if(!fields["Username"]){
        formIsValid = false;
        return this.notify("Username cannot be empty");
     }

     if(typeof fields["Username"] !== "undefined"){
        let lastAtPos = fields["Username"].lastIndexOf('@');
        let lastDotPos = fields["Username"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["Username"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["Username"].length - lastDotPos) > 2)) {
           formIsValid = false;
           return this.notify("Username is not valid");
         }
    }
    this.notify(errors);
    return formIsValid;
}

 onSubmit = (e) => {
   const { onUserSubscribe, history} = this.props;
   const { Username, password } = this.state;

   history.push('/dashboard')
   // if (this.handleValidation(password, Username)) {
   //  onUserSubscribe(password, Username);
   // }
   fetch('https://localhost:9070/v1/login', {
     method: 'POST',
     body: JSON.stringify({ Username, password }),
   })
 }


  render() {

    return (

      <div id="LoginBox" class="bg0 wsize1 bor1 p-l-45 p-r-45 p-t-50 p-b-18 p-lr-15-sm">
        <h3 className="l1-txt3 txt-center p-b-43">
        <h3>Fussball Organiser</h3>
        </h3>

        <div class="w-full validate-form" >
          <LoginInput onChange={this.handleChange} value={null} password="Username" placeholder={'Username'}/>
          <LoginInput onChange={this.handleChange} value={null} password="Password" placeholder={'Password'}/>

          <button class="flex-c-m size2 s1-txt2 how-btn1 trans-04" onClick={this.onSubmit}>
            Login
          </button>
        </div>
      </div>
    );
  }
}



export const LoginBox = withRouter(LoginBoxComponent);
export default LoginBox;
