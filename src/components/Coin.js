import React from "react";

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name, base: props.base, price: 0, currency: "€"};
  }

  componentDidMount() {
    this.coinID = setInterval(() => {
      this.updateCoin();
    }, 1 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.coinID);
  }

  updateCoin() {
    fetch(`https://api.cryptonator.com/api/ticker/${this.state.base}-eur`)
    .then (response => response.json())
    .then (data => {
      this.setState({
        price: Math.round(data.ticker.price),
      })
    })
  }

  render() {
    return (
        <div className="coin-price">
          <h2>{this.state.name}</h2>
          <small>{this.state.base}</small>
          <div>{this.state.price + " " + this.state.currency}</div>
          <div className="buy-coin">
            <input type="number" min="0" placeholder="enter amount"/>
            <button type="submit">Buy</button>
          </div>
        </div>
    );
  }

}

export default Coin;
