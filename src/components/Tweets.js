import React, { useState, useEffect } from 'react';
import TweetCards from './TweetCards';

// options in select coin (List of coins and codes)
const coins = [
  {
    name: 'Bitcoin',
    code: 'btc-bitcoin',
  },
  {
    name: 'Dogecoin',
    code: 'doge-dogecoin',
  },
  {
    name: 'Ethereum',
    code: 'eth-ethereum',
  },
];

const Tweets = () => {
  // tweets state
  const [tweets, setTweets] = useState([]);
  // input search state
  const [optionsState, setOptionsState] = useState(
    coins[0].code
  );
  const [submitClicked, setSubmitClicked] =
    useState(false);

  // fetch tweets depending on term
  const fetchTweets = async (term) => {
    const response = await fetch(
      `https://api.coinpaprika.com/v1/coins/${term}/events`
    );
    const data = await response.json();
    setTweets(data);
  };

  // render component on submit click
  useEffect(() => {
    if (submitClicked) {
      fetchTweets(optionsState);
      setSubmitClicked(!submitClicked);
    }
    console.log('render', submitClicked);
  }, [submitClicked]);

  return (
    <section className="twitter">
      <div className="twitter-search">
        <h2>Search Twitter for a specific crypto</h2>
        <select
          value={optionsState}
          onChange={(e) =>
            setOptionsState(e.target.value)
          }>
          {coins.map((coin) => (
            <option value={coin.code} key={coin.code}>
              {coin.name}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            setSubmitClicked(!submitClicked)
          }>
          Search Tweets
        </button>
        <TweetCards tweets={tweets} />
      </div>
    </section>
  );
};

export default Tweets;
