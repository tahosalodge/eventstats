import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const colors = [
	'#3F7CAC',
	'#D81E5B',
	'#F0544F',
	'#C6D8D3',
	'#FDF0D5',
	'#46B1C9',
	'#0A369D',
];

const chart = ({eventData}) => {
  const data = {
  	labels: eventData.map(data => data.label),
  	datasets: [{
  		data: eventData.map(data => data.value),
  		backgroundColor: colors,
  	}]
  };
  return (
    <div style={{width: '50%'}}>
      <Doughnut data={data}/>
    </div>
  )
}
export default chart;
