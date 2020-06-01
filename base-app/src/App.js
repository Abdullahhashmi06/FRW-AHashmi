import React from 'react';
import MyText from './components/mytext';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class='overlay'>
          <img src="assets/image-4ir.jpg" alt='Ready for React !' class='bgimg' />
        </div>
        <MyText />
      </header>
    </div>
  );
}

export default App;
