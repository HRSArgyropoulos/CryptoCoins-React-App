import React from "react";
import BuyCoin from "./BuyCoin"

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name, base: props.base, price: 0, currency: "€", rise: true };
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
      const newPrice = Math.round(data.ticker.price);
      if (newPrice !== this.state.price) {
        if (newPrice > this.state.price) {
          this.setState({rise: true});
        }
        else {
          this.setState({rise: false})
        }
      }
      this.setState({
        price: newPrice,
      })
    })
  }

  render() {
    return (
        <div className="coin-price">
          <h2>{this.state.name}</h2>
          <small>{this.state.base}</small>
          <div style={{color: this.state.rise ? "green" : "red"}}>{this.state.price + " " + this.state.currency}</div>
          <BuyCoin className="buy-coin" price={this.state.price}/>
        </div>
    );
  }

}

export default Coin;
