import React from "react";
import Button from "./Button";

function CryptoPrice(props) {
  const coin = props.data;
  return (
    <div className="prices">
      <div className="coin-price">
        <h2>{coin.name}</h2>
        <div>{coin.price + " " + coin.currency}</div>
        <Button id="add" />
      </div>
      <div className="buyCoins">
          <form>
              <label>
                  Enter amount:
                    <input type="number" />
              </label>
          </form>
      </div>
    </div>
  );
}

export default CryptoPrice;
