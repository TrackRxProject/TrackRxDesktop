import React from 'react';
import PropTypes from 'react-router';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';

const linkStyle = {
  textDecoration: 'none'
};

const itemStyle = {
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
        <Link to='/' style={linkStyle} onClick={ this.props.toggle }>
          <MenuItem primaryText='Home' style={itemStyle}/>
        </Link>
        <Link to='/Patients' style={linkStyle} onClick={ this.props.toggle }>
          <MenuItem primaryText='Patients' style={itemStyle}/>
        </Link>
      </div>
    );
  }
}
