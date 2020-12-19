import React from 'react';
import './App.css';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Menu dishes={'Chicken Karahi'} sweet={'Kheer'} drink={'Lassi'} nan={'Roghni Naan'} />

      <hr />

      <Menu dishes={'Chicken Handi'} sweet={'Gajar Ka Halwa'} drink={'Kehwa'} nan={'Makaie Ki Rotti'} />

      <hr />

      <Menu dishes={'Chicken Biryani'} sweet={'Gulaab Jamun'} drink={'Kashmiri Chai'} nan={'Puri Paratha'} />

      <hr />

    </div>
  );
}

export default App;
