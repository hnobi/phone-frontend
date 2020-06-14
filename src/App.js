import React from 'react';
import Header from './Components/Header';
import RequestType from './Components/RequestType';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />  
        <RequestType />      
        <div className='main'>
          main
        </div>
      </div>
    </div>
  );
}

export default App;
