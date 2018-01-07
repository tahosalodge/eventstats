import React from 'react';
import Event from './Event';

class Banquet extends React.Component {
  state = { eventData: {} };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_BASE}/tahosa-events/v1/tickets`)
      .then(res => res.json())
      .then(eventData => this.setState({ eventData }));
  }

  render() {
    const { eventData } = this.state;
    return (
      <div className="Banquet">
        {Object.keys(eventData).length === 0 && <h1>Loading...</h1>}
        {Object.keys(eventData).length > 0 && <Event eventData={eventData.banquet} />}
      </div>
    );
  }
}

export default Banquet;
