import CryptoPrices from './components/CryptoPrices'
import Portfolio from './components/Portfolio';
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
      <Header />
      <Portfolio />
      <CryptoPrices/>
    </div>
  )
}

export default App;
