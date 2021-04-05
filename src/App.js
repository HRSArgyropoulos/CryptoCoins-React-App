import CryptoPrices from './components/CryptoPrices'
import Portfolio from './components/Portfolio';
import Header from "./components/Header";
import PackStore from './components/PackStore';
import Packages from './components/Packages';

function App() {

  return (
    <div className="App">
      <Header />
      <Portfolio />
      <CryptoPrices/>
      <PackStore />
      <Packages/>
    </div>
  )
}

export default App;
