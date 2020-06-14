import React from 'react';
import Header from './Components/Header';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        {/* <div className='header'> */}
          <Header />        
        {/* </div> */}
        <div className='main'>
          main
        </div>
      </div>
    </div>
  );
}

export default App;
