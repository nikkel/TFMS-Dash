/** @format */

import React from 'react';
// //eslint-disable-next-line
// import logo from './logo.svg';
import logo from './sa-igloo-logo.gif';
import './App.css';
import './AppStyle.css';

function App() {
  return (
    <html>
      <div class='wrapper'>
        <div class='left-wrapper'>
          <h1>Torn Faction Management System</h1>
          <span id='welcome-text'>
            Welcome,
            <br />
            Please login using your API key
          </span>
          <form>
            <div class='form-outer'>
              <label for='login-key'>Torn API Key</label>
              <input
                name='login-key'
                type='text'
                placeholder='Enter your Torn API Key...'
              ></input>
            </div>
            <button type='submit'>Login.</button>
          </form>
        </div>
        <div class='right-wrapper'>
          <img src={logo} class='logo' alt='logo' />
        </div>
      </div>
    </html>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
