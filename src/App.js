/** @format */

import React, { useEffect, useState } from 'react';
// //eslint-disable-next-line
// import logo from './logo.svg';
import logo from './sa-igloo-logo.png';
import './App.css';
import './AppStyle.css';
import api from 'torn-api';

const App = () => {
  const [token, setToken] = useState([]);

  const getVerification = async () => {
    api.key(token);
    return await api.user
      .profile()
      .then((response) => {
        console.log(response);
        if ('error' in response) {
          const res = response['error'];
          res['validToken'] = false;
          return res;
        }

        if (!('error' in response)) {
          const res = response;
          res['validToken'] = true;
          return res;
        }

        return response;
      })
      .catch((err) => {
        return;
      });
  };

  useEffect(() => {});

  const onTokenChange = (event) => {
    setToken(event.target.value);
    console.log(`Token Set: ${event.target.value}`);
  };

  const onVerifyToken = async (event) => {
    event.preventDefault();
    const response = await getVerification();
    if (response['validToken'] === true) {
      alert(
        `Success, you're a part of ${response['faction']['faction_name']}!`
      );
    }
    if (response['validToken'] === false) {
      alert(`Invalid token! - {TORN: ${response['error']}}`);
    }
  };

  return (
    <div className='wrapper'>
      <div className='left-wrapper'>
        <h1>Torn Faction Management System</h1>
        <span id='welcome-text'>
          Welcome,
          <br />
          Please login using your API key
        </span>
        <form>
          <div className='form-outer'>
            <label htmlFor='login-key'>Torn API Key</label>
            <input
              type='text'
              placeholder='Enter your Torn API Key...'
              onChange={onTokenChange}
            ></input>
          </div>
          <button type='button' onClick={onVerifyToken}>
            Login.
          </button>
        </form>
      </div>
      <div className='right-wrapper'>
        <img src={logo} className='logo' alt='logo' />
      </div>
    </div>
  );
};

export default App;
