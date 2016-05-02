'use strict';

import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import Table from './Table'

export default class App extends React.Component {

  setRefillFlag() {
    console.log('reset');
    var request = new Request('http://trackrx.xyz:8000/reset/1');
    fetch(request, {
      method: 'PUT',
      mode: 'cors',
    }).then(function(response) {
      return response.text()
    }).then(function(text) {
      console.log(text);
    });
  }

  render() {
    return (
      <div>
        <Table/>
        <RaisedButton 
          label='Refill Prescription'
          labelColor='white'
          style={{
            float: 'right',
            marginTop: 50
          }}
          backgroundColor='MediumPurple'
          onMouseDown={this.setRefillFlag.bind(this)}
        />
      </div>
    );
  }
}

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'No bottles'};
  }

  buttonClicked() {
    console.log(this);
    console.log('button clicked');
      var request = new Request('http://trackrx.xyz:8000/prescription/1/activate', {
      headers: new Headers({
      'Content-Type': 'application/json'
      })
    });

    var that = this; // save for updating state inside fetch

    fetch(request, {
      method: 'GET',
      mode: 'cors' // allow requests to non-origin domain
    }).then(function(response) {
      return response.text()
    }).then(function(text) {
      console.log(text);
      var data = JSON.parse(text);
      console.log(document.getElementById("patient"));
      if (data.activate) {
        that.setState({data: data.interval});
      }
    });
  }

  render() {
    return (
      <div>
        <p id="patient">{this.state.data}</p>
        <button onClick={this.buttonClicked.bind(this)}>Refresh Bottles</button>
      </div>
    );
  }
}
*/
