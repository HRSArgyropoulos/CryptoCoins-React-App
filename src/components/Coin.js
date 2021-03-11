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
      <div className="prices">
        <div className="coin-price">
          <h2>{this.state.name}</h2>
          <div>{this.state.price + " " + this.state.currency}</div>
        </div>
      </div>
    );
  }

}

export default Coin;
