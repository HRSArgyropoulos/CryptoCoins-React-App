import React, { useState, useEffect } from 'react';
import TweetCards from './TweetCards';

const Tweets = () => {
  // tweets state
  const [tweets, setTweets] = useState([]);
  // input search state
  const [tweetTerm, setTweetTerm] = useState('');
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
      fetchTweets(tweetTerm);
      setSubmitClicked(!submitClicked);
    }
    console.log('render', submitClicked);
  }, [submitClicked]);

  return (
    <section className="twitter">
      <div className="twitter-search">
        <h2>Search Twitter for a specific crypto</h2>
        <span>
          e.g try btc-bitcoin, doge-dogecoin,
          eth-ethereum
        </span>
        <input
          type="text"
          value={tweetTerm}
          onChange={(e) =>
            setTweetTerm(e.target.value)
          }
        />
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
