import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

@inject("localeStore") @observer
class HomePage extends Component {
	constructor(props) {
    super(props);

    this.state = {
      localeStore: props.localeStore
    }
  }

  render() {
    return (
      <div>
        {this.state.localeStore.getLocalized("text.app_name")}
      </div>
    );
  }
}

export default HomePage;
