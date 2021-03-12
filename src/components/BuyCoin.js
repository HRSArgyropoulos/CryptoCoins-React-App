import React from 'react'

const BuyCoin = (props) => {
    return (
        <div>
            <input type="number" min="0" placeholder="enter amount"/>
            <button type="submit">Buy</button>
        </div>
    )
}

export default BuyCoin
