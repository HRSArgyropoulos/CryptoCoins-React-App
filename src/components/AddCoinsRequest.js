import React, { useState } from 'react';
import RequestedCoinsList from './RequestedCoinsList';

const AddCoinsRequest = () => {
  const [coins, setCoins] = useState([]);
  const [coinRequest, setCoinRequest] = useState('');

  const handleChange = (e) => {
    setCoinRequest(e.target.value);
  };

  const handleSumbmit = (e) => {
    // push coin to list of coins
    setCoins([...coins, coinRequest]);
    // set coin input value to default
    setCoinRequest('');
    e.preventDefault();
  };

  return (
    <>
      <h2
        style={{
          textDecoration: 'underline',
          textAlign: 'center',
          margin: '1rem 0',
        }}
      >
        Request New Coins
      </h2>
      <form
        id="addCoins"
        name="addCoins"
        className="request-coins-form"
      >
        <label>
          New Coin:
          <input
            type="text"
            value={coinRequest}
            onChange={handleChange}
            placeholder="Enter a coin name"
          ></input>
          <button type="submit" onClick={handleSumbmit}>
            Request
          </button>
        </label>
      </form>
      {/* conditional rendering if coins array is not empty render element */}
      {coins.length > 0 && (
        <RequestedCoinsList coins={coins} />
      )}
    </>
  );
};

export default AddCoinsRequest;
