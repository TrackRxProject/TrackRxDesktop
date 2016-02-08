'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var Component = React.Component;

class PatientBox extends Component {
  buttonClicked() {
    console.log('button clicked');
    var request = new Request('http://trackrx.xyz:8000/prescription/1', {
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    });
    fetch(request, {
      method: 'get',
      mode: 'no-cors'
    }).then(function(response) {
      console.log(response);
      return response.text(); 
    }).then(function(text) {
      console.log(text);
    }).catch(function(err) {
      console.log('error');
      console.log(err);
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        <p>Patient 1</p>
        <button onClick={this.buttonClicked.bind(this)}>Refresh Bottles</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div style={navStyle}>
          <h1 style={navStyle}>TrackRx Pharmacy Application</h1>
        </div>
        <div>
          <PatientBox />
        </div>
      </div>
    );
  }
}

var navStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: 'MediumPurple',
  textAlign: 'center'
};
 

ReactDom.render(<App/>, document.getElementById('content'));
