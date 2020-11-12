/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
// //eslint-disable-next-line
// import logo from './logo.svg';
import logo from './sa-igloo-logo.png';
import './App.css';
import './AppStyle.css';

const tornURL = 'https://api.torn.com/user/?selections=profile&key=';

const App = () => {
  const [token, setToken] = useState([]);

  const getVerification = useCallback(async () => {
    return await axios
      .get(`${tornURL + token}`)
      .then((response) => {
        // If returns an error
        if ('error' in response.data) {
          const res = response.data['error'];
          res['validToken'] = false;
          return res;
        }

        // If return success
        if (!('error' in response.data)) {
          const res = response.data;
          res['validToken'] = true;
          return res;
        }

        return response.data;
      })
      .catch((err) => {
        return;
      });
  });

  useEffect(() => {});

  const onTokenChange = useCallback((event) => {
    setToken(event.target.value);
    console.log(`Token Set: ${event.target.value}}`);
  });

  const onVerifyToken = useCallback(async (event) => {
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
  });

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
