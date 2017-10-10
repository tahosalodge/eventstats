import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './components/event';

class App extends Component {
  state = {eventData: []}
  componentDidMount() {
    fetch('https://tahosalodge.org/wp-json/tahosa-events/v1/tickets')
    .then(res => res.json())
    .then(eventData => this.setState({eventData}))
  }
  render() {
    let content = <h1>Loading...</h1>;
    if (this.state.eventData.length > 0) {
      <h1>Loaded</h1>
    }
    return (
      <div className="App">
        {this.state.eventData.length === 0 &&
          <h1>Loading...</h1>
        }
        {this.state.eventData.length > 0 &&
          <div>
            {this.state.eventData.map(event => <Event eventData={event} />)}
          </div>
        }
      </div>
    );
  }
}

export default App;
