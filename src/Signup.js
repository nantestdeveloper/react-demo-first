import React from 'react';
import axios from 'axios';
import './signup.css';
class Signup extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/api/v1/signup',{"user": this.state})
      .then(response => {
        console.log(response);
        if (response["data"]["code"]==200){
          console.log("SUccess");
          window.location = "/login"
        }
        else{
          console.log(response["data"]["error"]);
        }

      })
      .catch(error => {
        alert(error);
      });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return(
           <div className='formContainer'>
              <div className='formHeader'>
              </div>
              <div className='formBody'>
              <div className='signUpContainer'>
                <h4 className='headerText'>Sign Up</h4>
                <form onSubmit={this.mySubmitHandler}>
                  <div className='inputSection'>
                    <input type='text' className='firstName' name='name' onChange={this.myChangeHandler} required/>
                    <label className='inputLabel'>Name</label>
                  </div>
                  <div className='inputSection'>
                    <input type='text' className='firstName' name='email' onChange={this.myChangeHandler} required/>
                    <label className='inputLabel'>Email</label>
                  </div>
                  <div className='inputSection'>
                    <input type='password' className='password' name='password' onChange={this.myChangeHandler} required/>
                    <label className='inputLabel'>Password</label>
                  </div>
                  <div className='inputSection'>
                    <input type='password' className='password' name='password_confirmation' onChange={this.myChangeHandler} required/>
                    <label className='inputLabel'>Confirm Password</label>
                  </div>
                  <div className='formFooter'>
                <button className='saveForm'> SignUp</button>
              </div>
                </form>
              </div>
              </div>
              
           </div>
    ) 

  }
}

export default Signup