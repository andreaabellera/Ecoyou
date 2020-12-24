import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  }
  ,[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The django backend said the current time is: {backendMessage}
        </p>
      </header>
    </div>
  );
}

export default App;
