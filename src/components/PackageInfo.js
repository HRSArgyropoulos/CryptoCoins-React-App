import React, { Component } from 'react'

const details = (tier) => {
    let balance,packs;
    switch (tier) {
        case "Free":
            balance=100;
            packs=3;
            break;
        case "Support":
            balance=300;
            packs=15;
            break;
        case "Shareholder":
            balance=1000;
            packs=50;
            break;
        default:
            balance=0;
            packs=0;
    }
    return {balance:balance+'€',packs:packs};
}

export default class PackageInfo extends Component {
    constructor(props) {
        super(props);
        this.tier = props.tier;
        this.details = details(this.tier);
        //this.handleOnClick.bind(this);
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
            </div>
        )
    }
}
