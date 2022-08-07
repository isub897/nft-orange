import React from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Navbar />
        <News />
      </div>
    );
  }

}

export default App;
