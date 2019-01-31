import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

@inject("localeStore") @observer
class Header extends Component {
	constructor(props) {
    super(props);

    this.state = {
      localeStore: props.localeStore
    }
  }

  render() {
    return (
      <div className = "App-header">
        {this.state.localeStore.getLocalized("text.app_header")}
      </div>
    );
  }
}

export default Header;
