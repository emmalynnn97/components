import React from 'react';
import './App.css';
import Col from './Col';
import Row from './Row';
import Item from './Item';
function App() {
  const items=[
    Item('Item 1', '10.99', 'https://imgix.cosmicjs.com/1bba14f0-115e-11eb-a3a4-e96c5b21843c-grailify-eYjrlMIZrQ-unsplash-1.jpg'),
    Item('Item 2', '11.99'),
    Item('Item 3', '12.99')
  ]
  const columns = [
    Col(items, 50),
    Col(items, 50),
    Col(items, 50)
  ]
  return (
    <div style={{width:'100vw',height:'100vh'}} className="App">
      {Row(columns, 75)}
      {Row(columns, 75)}
    </div>
  );
}

export default App;
