import React, { Component } from 'react'

const details = (tier) => {
    let balance,packs,price;
    switch (tier) {
        case "Free":
            balance=100;
            packs=3;
            price=0;
            break;
        case "Support":
            balance=300;
            packs=15;
            price=7;
            break;
        case "Shareholder":
            balance=1000;
            packs=50;
            price=20;
            break;
        default:
            balance=0;
            packs=0;
            price=0;
    }
    return {balance:balance+'€',packs:packs,price:price+'€'};
}

export default class PackageInfo extends Component {
    constructor(props) {
        super(props);
        this.tier = props.tier;
        this.details = details(this.tier);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {bought: false};
    }

    handleOnClick() {
        console.log(this);
        if (!this.state.bought) {
            if (window.confirm(`Do you want to buy ${this.tier} tier for ${this.details.price}?`)) {
                this.setState(state => ({
                    bought: !state.bought
                }));
            };
        } else {
            window.alert('Package has already been bought');
        }
    }

    render() {
        return (
            <div style={{color:"white"}}>
                <h2>{this.tier} Tier</h2>
                <ul>
                    <li>{this.details.balance} starting balance</li>
                    <li>{this.details.packs} Crypto Packs per week</li>
                    <li>Live Support 24/7</li>
                    {this.tier!=='Free' && <li>Priority in customer service</li>}
                </ul>
                {this.tier!=='Free' && <button onClick={this.handleOnClick} style={{backgroundColor: this.state.bought?"green":""}}>{this.state.bought ? 'Bought' : 'Buy now'}</button>}
            </div>
        )
    }
}
