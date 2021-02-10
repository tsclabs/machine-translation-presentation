import Hero from './components/Hero.jsx'
import Translators from './components/Translators.jsx'
import Pricing from './components/Pricing.jsx'
import Strategy from './components/Strategy.jsx'
import Finish from './components/Finish.jsx'

function App() {
  return (
    <div className="app-root plume">
      <div className="pm-container">
        <Hero/>
        <Translators/>
        <Pricing/>
        <Strategy/>
        <Finish/>
      </div>
    </div>
  );
}

export default App;
