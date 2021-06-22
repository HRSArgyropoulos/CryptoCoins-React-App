import React from 'react';

const RequestedCoinsList = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <small>You have requested the following coins:</small>
      <ul className="requested-coins-list">
        {props.coins.map((coin, index) => (
          <li
            key={coin + index}
            style={{
              margin: '0 1rem',
              display: 'inline-block',
            }}
          >
            {index + 1}. {coin}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestedCoinsList;
