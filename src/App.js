import React from 'react';
import logo from './logo.png';
import './App.css';

function App( { width, height } ) {
  return (
  
    <div className="App">
      <header style={ {paddingBottom: ( height / width * 100 ) + '%'} }  className="App-header">
      <img src={logo} alt="logo" className="App" />
        <b>
         Working on process<br/>
         We're targeting adoption of animals on that project in Istanbul. 
        </b>
      </header>
    </div>
  );
}
export default App;
