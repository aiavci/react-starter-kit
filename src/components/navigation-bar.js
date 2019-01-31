import React, { Component } from 'react';

class NavigationBar extends Component {
  render() {
    return (
      <div className = "App-navigation">
        { this.props.children }
      </div>
    );
  }
}

export default NavigationBar;
