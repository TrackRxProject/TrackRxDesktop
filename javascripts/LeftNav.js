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

const menuItems = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/patients',
    text: 'Patients'
  }
];

export default class LeftNav extends React.Component {

  constructor(props) {
    super(props);
  }

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  }

  NavLink(to, text, key) {
    return (
      <Link to={to} style={linkStyle} onClick={this.props.toggle} key={key}>
	<MenuItem primaryText={text} style={itemStyle}/>
      </Link>
    );
  }

  render() {
    return (
      <LNav open={ this.props.open }>
        {menuItems.map((menuItem, index) => (
          this.NavLink(menuItem.path, menuItem.text, index)
        ))}
      </LNav>
    );
  }
}

