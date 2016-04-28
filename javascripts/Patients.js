'use strict';

import React from 'react'

var LineChart = require('react-chartjs/lib/line');
var Chart = require('chart.js')

export default class Patients extends React.Component {
  // kvar LineChart = require("react-chartjs").Line;
   
  render() {
    var chartData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3]
      }]
    };

    var chartOptions =  {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    };

    return (
      <div>
        <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
}
