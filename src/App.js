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
      route: "news",
      user: {},
      signedin: false
    }
  }

  loadUser = (input) => {
    this.setState({
      user: input
    })
  }

  routeChange = (route) => {
    this.setState({route: route});
  }

  signinChange = (logic) => {
    this.setState({signedin: logic})
  }

  render() {
    return (
      <div className='App'>
        <Navbar user={this.state.user.username} signedin={this.state.signedin} route={this.state.route} routeChange={this.routeChange} />
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
                    ? <Signin signinChange={this.signinChange} loadUser={this.loadUser} routeChange={this.routeChange}/>
                    : (
                      this.state.route === "dashboard"
                        ? <Dashboard signinChange={this.signinChange} routeChange={this.routeChange} user={this.state.user} />
                        : <Register loadUser={this.loadUser} routeChange={this.routeChange}/>
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
