import React from 'react'
import Button from './Button'

function CryptoPrice( props ) {
    const coin = props.data;
    return (
        <div className="coin-price">
            <h2>{coin.name}</h2>
            <div>{(coin.price + " " + coin.currency)}</div>
            <Button />
        </div>
    )
}

export default CryptoPrice
