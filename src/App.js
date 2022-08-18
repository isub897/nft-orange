import React from 'react';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "signin"
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
                    ? <Signin routeChange={this.routeChange}/>
                    : (
                      this.state.route === "dashboard"
                        ? <Dashboard />
                        : <Register routeChange={this.routeChange}/>
                    )
                )
            )
          )
        }
        
        
      </div>
    );
  }

}

export default App;
