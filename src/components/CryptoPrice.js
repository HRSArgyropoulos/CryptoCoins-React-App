import React from 'react'

function CryptoPrice( props ) {
    const coin = props.data;
    return (
        <div className="coin-price">
            <h2>{coin.name}</h2>
            <div>{(coin.price + " " + coin.currency)}</div>
        </div>
    )
}

export default CryptoPrice
