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

  async componentDidMount() {
    try {
    const sessionCall = await fetch('http://localhost:3000/session', {
      credentials: 'include'
    });
    const user = await sessionCall.json();
    if (user.email) {
      return this.setState({
        user: user,
        signedin: true
      })
    }
    } catch(err) {

    }

  }

  render() {
    const { signedin, user, route } = this.state;
    return (
      <div className='App'>
        <Navbar user={user.username} signedin={signedin} route={route} routeChange={this.routeChange} />
        {route === "news"
          ? <News signedin={signedin} username={user.username} />
          : (
            route === "stats"
            ? <Stats />
            : (
              route === "about"
                ? <About />
                : (
                  route === "signin"
                    ? <Signin signinChange={this.signinChange} loadUser={this.loadUser} routeChange={this.routeChange}/>
                    : (
                      route === "dashboard"
                        ? <Dashboard signinChange={this.signinChange} routeChange={this.routeChange} user={user} />
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
