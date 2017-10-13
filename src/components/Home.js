import React from 'react';
import Event from './Event';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventData: [] };
  }
  componentDidMount() {
    fetch('https://tahosalodge.org/wp-json/tahosa-events/v1/tickets')
      .then(res => res.json())
      .then(eventData => this.setState({ eventData }));
  }
  render() {
    return (
      <div className="Home">
        {this.state.eventData.length === 0 && <h1>Loading...</h1>}
        {this.state.eventData.length > 0 && (
          <div>
            {this.state.eventData.map(event => <Event key={event.name} eventData={event} />)}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
