import PropTypes from "prop-types"

const Portfolio = ( { amount, currency } ) => {
    return (
        <div className="portfolio">
            <h1>Balance: {amount} {currency} </h1>
            <small>Available to buy crypto currencies</small>
        </div>
    )
}

Portfolio.defaultProps = {
    amount: 100,
    currency: "€",
}

Portfolio.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default Portfolio
