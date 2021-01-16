import React from 'react';
import './App.css';

import Header from "./components/Header";
import Discover from "./components/Discover";
import Redeem from "./components/Redeem";
import About from "./components/About";
import Challenges from "./components/Challenges";
import Me from "./components/Me";

import { 
  BrowserRouter, Link, Route, Switch, useLocation, Redirect
} from "react-router-dom";

function App() {
  let [backendMessage, setBackendMessage] = React.useState("");

  React.useEffect(() => 
  {
    fetch("http://127.0.0.1:8000/test/")
    .then(response => response.text())
    .then(response => 
    {
      let responseTxt = response;
      setBackendMessage(responseTxt);
    }).catch((errResponse) => 
    {
      alert(`error: ${errResponse}`);
    });
  } ,[]);

  return (
    <div className="App">
    <Header />
      <Switch>
        
        <Route path="/discover">
          <Discover />
        </Route>

        <Route path="/redeem">
          <Redeem />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/challenges">
          <Challenges />
        </Route>

        <Route path="/me">
          <Me />
        </Route>

        <Route path='/' render={() => (
            <Redirect to="/discover" />
        )}/>
      </Switch>
    </div>
  );
}

export default App;
