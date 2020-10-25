import React from 'react';
import './App.css';
import ShoeShop from './ShoeShop'
function App() {
  return (
    <div style={{width:'100vw',height:'100vh'}} className="App">
      {ShoeShop()}
    </div>
  );
}

export default App;
