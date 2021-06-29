import React from 'react';

const TweetCards = (props) => {
  const tweets = props.tweets;
  console.log(tweets);
  // map tweets list
  return (
    <ul className="twitter-cards">
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <a
            href={tweet.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}>
            <img
              src={tweet.proof_image_link}
              alt={tweet.name}
            />
            <h3>{tweet.name}</h3>
            <p>{tweet.description}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TweetCards;
