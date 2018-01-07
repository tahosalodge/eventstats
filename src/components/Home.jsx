import React from 'react';
import Event from './Event';

class Home extends React.Component {
  state = { eventData: {} };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_BASE}/tahosa-events/v1/tickets`)
      .then(res => res.json())
      .then(eventData => this.setState({ eventData }));
  }

  render() {
    const { eventData } = this.state;
    const eventKeys = Object.keys(eventData);
    return (
      <div className="Home">
        {eventKeys.length === 0 && <h1>Loading...</h1>}
        {eventKeys.length > 0 && (
          <div>
            {eventKeys.map(event => <Event key={event} eventData={eventData[event]} />)}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
