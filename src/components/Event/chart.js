import React from 'react';
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

const chart = ({ eventData }) => {
  const data = {
    labels: eventData.map(eData => eData.label),
    datasets: [
      {
        data: eventData.map(eData => eData.value),
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
export default chart;
