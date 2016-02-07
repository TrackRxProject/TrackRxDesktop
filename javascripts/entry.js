'use strict';

var React = require('react');
var ReactDom = require('react-dom');

var CommentBox = React.createClass({
  render: function() {
    console.log('render');
    return (
      <div className="commentBox">
        Patient List
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
  return (
    <div>
      <div style={navStyle}>
        <h1 style={navStyle}>TrackRx Pharmacy Application</h1>
      </div>
      <div>
        <CommentBox />
      </div>
    </div>
  );
  }
});

var navStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: 'MediumPurple',
  textAlign: 'center'
};
 

ReactDom.render(<App/>, document.getElementById('content'));
