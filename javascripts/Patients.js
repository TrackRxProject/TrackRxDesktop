'use strict';

import React from 'react'

var LineChart = require('react-chartjs/lib/line');
var Chart = require('chart.js')

export default class Patients extends React.Component {
  // kvar LineChart = require("react-chartjs").Line;
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
          label: '# of Votes',
          strokeColor: 'rgba(147,112,219,1)',
          data: [],
        }]
      }
    };
  }

  componentDidMount() {
    var chartSums = [];
    var request = new Request('http://trackrx.xyz:8000/adherence/1');
    var that = this;
    fetch(request, {
      method: 'GET',
      mode: 'cors',
    }).then(function(response) {
      return response.text()
    }).then(function(text) {
      var adhData = JSON.parse(text).reverse();
      console.log(adhData);
      for(var i=0; i<31; i++) {
        var sum = 0;
        for(var j=0; j<4; j++) {
          sum += adhData[i];
          i += 1;
        }
        chartSums.push(sum);
      }
      that.setState({chartData: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          datasets: [{
            label: '# of Votes',
            strokeColor: 'rgba(147,112,219,1)',
            data: chartSums.reverse(),
          }]
        }
      });
    });
  }
   
  render() {

    var chartOptions =  {
      scaleOverride: true,
      scaleSteps: 4,
      scaleStepWidth: 1,
      scaleStartValue: 0,
      datasetFill: false,
    };

    return (
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
        <LineChart data={this.state.chartData} options={chartOptions} width="600" height="250" redraw/>
      </div>
    );
  }
}
