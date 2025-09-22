import React, { useState } from 'react';
import EntrancePage from './components/EntrancePage';
import Portfolio from './components/Portfolio';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleEnterPortfolio = () => {
    setShowPortfolio(true);
  };

  return (
    <div className="overflow-x-hidden">
      <EntrancePage 
        onEnter={handleEnterPortfolio} 
        isVisible={!showPortfolio}
      />
      <Portfolio 
        isVisible={showPortfolio}
      />
    </div>
  );
}

export default App;