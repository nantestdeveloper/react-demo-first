// import React, { useState } from 'react';
// import axios from 'axios';
// import { setUserSession } from './Utils/Common';
// import './signup.css';
// function Login(props) {
//   const [loading, setLoading] = useState(false);
//   const email = useFormInput('');
//   const password = useFormInput('');
//   const [error, setError] = useState(null);
 
//   // handle button click of login form
//   const handleLogin = () => {
//     setError(null);
//     setLoading(true);
//     axios.post('http://localhost:4000/api/v1/authenticate', { email: email.value, password: password.value }).then(response => {
//       setLoading(false);
//       // debugger
//       setUserSession(response.data.user.result, response.data.user);
//       props.history.push('/dashboard');
//     }).catch(error => {
//       setLoading(false);
//       if (error.response.status === 401) setError(error.response.data.message);
//       else setError("Something went wrong. Please try again later.");
//     });
//   }
 
//   return (
//     <div>
//       Login<br /><br />
//       <div>
//         Email<br />
//         <input type="text" {...email} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password<br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
//       <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
//     </div>
//   );
// }
 
// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
 
//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }
 
// export default Login;

import React from 'react';
import axios from 'axios';
import './signup.css';
import { setUserSession } from './Utils/Common';
class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/api/v1/authenticate',{"user": this.state})
      .then(response => {
        console.log(response);
        if (response["data"]["code"]==200){
          setUserSession(response.data.user.result, response.data.user);
          window.location = "/dashboard";
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
                <h4 className='headerText'>LogIn</h4>
                <form onSubmit={this.mySubmitHandler}>
                  <div className='inputSection'>
                    <input type='text' className='firstName' name='email' onChange={this.myChangeHandler} required/>
                    <label className='inputLabel'>Email</label>
                  </div>
                  <div className='inputSection'>
                    <input type='password' className='password' name='password' onChange={this.myChangeHandler} required/>
                    <label className='inputLabel'>Password</label>
                  </div>
                  <div className='formFooter'>
                <button className='saveForm'> Login</button>
              </div>
                </form>
              </div>
              </div>
              
           </div>
    ) 

  }
}

export default Login