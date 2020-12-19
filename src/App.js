import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter';

function App() {
  let [isDark, setDark] = useState(false);
  return (
    <div className={`App ${isDark ? 'darkMode' : "" }`}>

    <h1> MODE : {isDark ? 'Dark Mode' : 'Light Mode'} </h1>

      {/* <h1> OUR MENU </h1>

      <hr />

      <Menu dishes={'Chicken Karahi'} sweet={'Kheer'} drink={'Lassi'} naan={'Roghni Naan'} />

      <hr />

      <Menu dishes={'Chicken Handi'} sweet={'Gajar Ka Halwa'} drink={'Kehwa'} naan={'Makaie Ki Rotti'} />

      <hr />

      <Menu dishes={'Chicken Biryani'} sweet={'Gulaab Jamun'} drink={'Kashmiri Chai'} naan={'Puri Paratha'} />

      <hr /> */}

      <Counter/>

      <br />
      
      <button onClick={() => setDark(!isDark)}>{isDark ? 'Light Mode' : 'Dark Mode'}</button>

    </div>
  );
}

export default App;
