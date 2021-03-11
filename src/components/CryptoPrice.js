import React from "react";
/* import Button from "./Button"; */

class CryptoPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name, price: props.price, currency: props.currency};
  }

  componentDidMount() {
    this.coinID = setInterval(() => {
      this.updateCoin();
    }, 5 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.coinID);
  }

  updateCoin() {
    /* this.setState((state) => ({
      price : this.state.price + 5,
    })); */
    fetch("https://api.cryptonator.com/api/ticker/btc-eur")
    .then (response => response.json())
    .then (data => {
      this.setState({
        price: Math.round(data.ticker.price),
      })
    })
  }

  render() {
    return (
      <div className="prices">
        <div className="coin-price">
          <h2>{this.state.name}</h2>
          <div>{this.state.price + " " + this.state.currency}</div>
        </div>
      </div>
    );
  }

}

export default CryptoPrice;
