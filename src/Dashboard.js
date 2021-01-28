import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import TodosContainer from './components/TodosContainer'
// import CKEditor from './components/CKEditor'
// import { Form, Button, FormGroup, FormControl, ControlLabel,ProgressBar } from "react-bootstrap";
import { Button,ProgressBar } from "react-bootstrap";

function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 

  return (
    <div>
      <Button variant="success" onClick={handleLogout} >Logout</Button>{' '}
      Welcome {user.name}!<br /><br />
      {/* <Button className onClick={handleLogout}/> */}
      <TodosContainer />
      <br></br>
      <div className="container">
          <ProgressBar now='60' label='60%' />
          
          <ProgressBar variant="success" now={40} />
          
          <ProgressBar striped variant="danger" now={80} />
          
          <ProgressBar animated variant="warning" now={45} />
      </div>

      
    </div>
  );
}
 
export default Dashboard;