import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Banquet from './Banquet';
import Login from './Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('eventstatstoken'),
    };
    this.setToken = this.setToken.bind(this);
  }

  setToken(token) {
    this.setState({ token });
    localStorage.setItem('eventstatstoken', token);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/banquet" component={Banquet} />
          <Route path="/login" render={() => <Login setToken={this.setToken} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
