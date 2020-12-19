import React from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <h1> OUR MENU </h1>

      <hr />

      <Menu dishes={'Chicken Karahi'} sweet={'Kheer'} drink={'Lassi'} naan={'Roghni Naan'} />

      <hr />

      <Menu dishes={'Chicken Handi'} sweet={'Gajar Ka Halwa'} drink={'Kehwa'} naan={'Makaie Ki Rotti'} />

      <hr />

      <Menu dishes={'Chicken Biryani'} sweet={'Gulaab Jamun'} drink={'Kashmiri Chai'} naan={'Puri Paratha'} />

      <hr />

    </div>
  );
}

export default App;
