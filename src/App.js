import React from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Signin from './components/Signin/Signin';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "stats"
    }
  }

  routeChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className='App'>
        <Navbar route={this.state.route} routeChange={this.routeChange} />
        {this.state.route === "news"
          ? <News />
          : (
            this.state.route === "stats"
            ? <Stats />
            : (
              this.state.route === "about"
                ? <About />
                : (
                  this.state.route === "signin"
                    ? <Signin />
                    : <Dashboard />
                )
            )
          )
        }
        
        
      </div>
    );
  }

}

export default App;
