import CryptoPrices from './components/CryptoPrices';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import PackStore from './components/PackStore';
import Packages from './components/Packages';
import Leaderboard from './components/Leaderboard';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Portfolio />
      <CryptoPrices />
      <PackStore />
      <Packages />
      <Leaderboard />
    </div>
  );
}

export default App;
