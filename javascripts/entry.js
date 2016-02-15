'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var Component = React.Component;

class PatientBox extends Component {
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
      mode: 'cors'
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
