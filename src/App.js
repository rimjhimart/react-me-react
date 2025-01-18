import React from 'react';
import Loader from './Loader';
import FixedImage from './FixedImage';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loader />
      <FixedImage />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
