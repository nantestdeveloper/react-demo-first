import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
 
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import TodosContainer from './components/TodosContainer'
import BootstrapDivToggle from './components/BootstrapDivToggle'
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

import { getToken, removeUserSession, setUserSession,getUser } from './Utils/Common';

function App() {
  const user = getUser();

  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/api/v1/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
 
  return (
    <div className="App">
      <BrowserRouter>
      
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/signup">Signup</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
            <NavLink activeClassName="active" to="/todoscontainer">Todos</NavLink>
            <NavLink activeClassName="active" to="/BootstrapDivToggle">BootstrapDivToggle</NavLink>
          </div>
          <div className="content">
            <Switch>
              <PublicRoute path="/signup" component={Signup} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PublicRoute path="/todoscontainer" component={TodosContainer} />
              <PublicRoute path="/BootstrapDivToggle" component={BootstrapDivToggle} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
 
export default App;
























// import React from 'react';
// import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
// import Login from './Login';
// import Dashboard from './Dashboard';
// import Home from './Home';
// import TodosContainer from './components/TodosContainer'
// import PrivateRoute from './Utils/PrivateRoute';
// import PublicRoute from './Utils/PublicRoute';
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div>
//           <div className="header">
//             <NavLink exact activeClassName="active" to="/">Home</NavLink>
//             <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
//             <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
//             <NavLink activeClassName="active" to="/todoscontainer">Todos</NavLink><small>(Access with token only)</small>
//           </div>
//           <div className="content">
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <PublicRoute path="/login" component={Login} />
//               <PrivateRoute path="/dashboard" component={Dashboard} />
//               <PublicRoute path="/todoscontainer" component={TodosContainer} />
//             </Switch>
//             {/* <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/login" component={Login} />
//               <Route path="/dashboard" component={Dashboard} />
//             </Switch> */}
//           </div>
//         </div>
//       </BrowserRouter>
      
//     </div>
//   );
// }
 
// export default App;