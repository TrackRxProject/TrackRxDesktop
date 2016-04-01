import React from 'react';
import PropTypes from 'react-router';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const style = {
  padding: '2px 10px'
};

export default class Left extends React.Component {

  constructor(props) {
    super(props);
  }

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div>
        <MenuItem primaryText='Home' style={style}/>
        <MenuItem primaryText='About' style={style}/>
        <MenuItem primaryText='Contact' style={style}/>
      </div>
    );
  }
}
