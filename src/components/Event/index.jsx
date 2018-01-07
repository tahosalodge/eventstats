import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Chart from './chart';

const Header = styled.div`
  background: #bf3742;
  color: white;
  padding: 2em;
`;

const ChartWrapper = styled.div`
  min-height: 50vh;
  display: flex;
  flex-flow: row wrap;
`;

const Event = ({ eventData }) => {
  const possibleCharts = ['by-reg-type', 'by-chapter', 'by-age', 'by-level'];
  const charts = Object.keys(eventData).reduce((map, key) => {
    if (possibleCharts.includes(key) && Object.keys(eventData[key]).length > 1) {
      const newMap = [...map];
      newMap.push(eventData[key]);
      return newMap;
    }
    return map;
  }, {});
  console.log(charts);
  return (
    <div>
      <Header>
        <h2>{eventData.name}</h2>
        <h3>Total Attendees:{eventData.total}</h3>
      </Header>
      <ChartWrapper>
        {charts.length &&
          charts.map(chart => <Chart key={`${eventData.name}-${chart}`} eventData={chart} />)}
      </ChartWrapper>
    </div>
  );
};

Event.propTypes = {
  eventData: propTypes.shape().isRequired,
};

export default Event;
