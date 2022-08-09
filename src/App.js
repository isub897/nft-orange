import React from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import './App.css';
import Signin from './components/Signin/Signin';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "news"
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        {this.state.route === "news"
          ? <News />
          : (
            this.state.route === "stats"
            ? <Stats />
            : (
              this.state.route === "about"
                ? <About />
                : <Signin />
            )
          )
        }
        
        
      </div>
    );
  }

}

export default App;
