import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <NavLink exact to = {this.props.linkUrl} activeStyle= { navigationStyle } className="Navigation-link">
        { this.props.linkTitle }
      </NavLink>
    );
  }
}

const navigationStyle = {
  borderBottom: 'solid',
  borderWidth: '0.5px',
  marginBottom: '-0.5px'
}

export default NavigationBar;
