import CryptoPrices from './components/CryptoPrices'
import Portfolio from './components/Portfolio';
import Header from "./components/Header";
import PackStore from './components/PackStore';

function App() {

  return (
    <div className="App">
      <Header />
      <Portfolio />
      <CryptoPrices/>
      <PackStore />
    </div>
  )
}

export default App;
