import React from 'react'

class BuyCoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinAmount: 0,
            coinPrice: props.price  // renders in the start so price will be 0 (async fetch not returned price yet)
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            coinAmount: event.target.value
        });
    }

    handleSubmit = (event) => {
        console.log(this.state)
        const totalPurchaseCost = this.state.coinAmount * this.state.coinPrice;
        alert(`I would check balance for ${totalPurchaseCost} euros`);
        event.preventDefault();
    }

    // on price change from API update the coinPrice in the state
    componentDidUpdate(prevProps) {
        if (this.props.price !== prevProps.price) {
            this.setState({
                coinPrice: this.props.price
            });
        }
    }


    render() {
        const { coinAmount } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="number" min="0" placeholder="Enter amount" value={coinAmount} onChange={this.handleChange}/>
                <button type="submit">Buy</button>
            </form>
        )
    }
}

export default BuyCoin
