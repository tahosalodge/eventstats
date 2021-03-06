import React from 'react';
import propTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const colors = ['#3F7CAC', '#D81E5B', '#F0544F', '#C6D8D3', '#FDF0D5', '#46B1C9', '#0A369D'];

const ChartWrapper = styled.div`
  width: 50%;
  padding: 2em;
  box-sizing: border-box;
  flex-grow: 1;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Chart = ({ eventData }) => {
  const data = {
    labels: Object.keys(eventData),
    datasets: [
      {
        data: Object.keys(eventData).map(key => eventData[key]),
        backgroundColor: colors,
      },
    ],
  };
  return (
    <ChartWrapper>
      <Doughnut data={data} />
    </ChartWrapper>
  );
};

Chart.propTypes = {
  eventData: propTypes.shape().isRequired,
};
export default Chart;
