import React, { useState, useEffect } from 'react';

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
    if (submitClicked) fetchTweets(tweetTerm);
    console.log('render');
  }, [submitClicked]);

  // map tweets list
  const tweetsList = tweets.map((tweet) => (
    <li key={tweet.id}>{tweet.name}</li>
  ));

  return (
    <section className="twitter">
      <div className="twitter-search">
        <h2>Search Twitter for a specific crypto</h2>
        <span>e.g try btc-bitcoin</span>
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
        <ul>{tweetsList}</ul>
      </div>
    </section>
  );
};

export default Tweets;
