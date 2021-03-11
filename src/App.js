import CryptoPrice from './components/CryptoPrice'
import Portfolio from './components/Portfolio';
import Header from "./components/Header";

function App() {

  const coins = [
    {
      name: "BitCoin",
      price: 42137.60,
      currency: "€"
    },
    {
      name: "Ethereum",
      price: 1302.56,
      currency: "€"
    },
    {
      name: "Litecoin",
      price: 146.5211,
      currency: "€"
    },
  ]

/*   const getApiPrices = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    coins[0].price = data.ticker.price;
  }

  getApiPrices("https://api.cryptonator.com/api/ticker/btc-eur");
  console.log(coins[0]); */

  return (
    <div className="App">
      <Header />
      <Portfolio />
      <div className="prices-container">
        <CryptoPrice {...coins[0]}/>
      </div>
    </div>
  )
}

export default App;
