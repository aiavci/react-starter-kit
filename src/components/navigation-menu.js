import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

@inject("localeStore") @observer
class NavigationMenu extends Component {
	constructor(props) {
    super(props);

    this.state = {
      localeStore: props.localeStore
    }
  }

  render() {
    return (
      <div className = "App-navigation">
        {this.state.localeStore.getLocalized("text.app_navigation")}
      </div>
    );
  }
}

export default NavigationMenu;
