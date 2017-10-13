import React from 'react';
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
const event = ({ eventData }) => {
  const charts = ['by-reg-type', 'by-chapter', 'by-age', 'by-level'];
  return (
    <div>
      <Header>
        <h2>{eventData.name}</h2>
        <h3>Total Attendees:{eventData.total}</h3>
      </Header>
      <ChartWrapper>
        {charts.map((chart) => {
          if (eventData[chart]) {
            return <Chart key={eventData.name + chart} eventData={eventData[chart]} />;
          }
        })}
      </ChartWrapper>
    </div>
  );
};
export default event;
