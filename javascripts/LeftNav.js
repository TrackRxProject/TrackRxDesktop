import React from 'react';
import LNav from 'material-ui/lib/left-nav';
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

export default class LeftNav extends React.Component {

  constructor(props) {
    super(props);
  }

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  }

  NavLink(to, text) {
    return (
      <Link to={to} style={linkStyle} onClick={this.props.toggle}>
	<MenuItem primaryText={text} style={itemStyle}/>
      </Link>
    );
  }

  render() {
    return (
      <LNav open={ this.props.open }>
        { this.NavLink('/', 'Home') }
        { this.NavLink('/patients', 'Patients') }
      </LNav>
    );
  }
}

