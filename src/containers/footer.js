import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

@inject("localeStore") @observer
class Footer extends Component {
	constructor(props) {
    super(props);

    this.state = {
      localeStore: props.localeStore
    }
  }

  render() {
    return (
      <div className = "App-footer">
        <div>
          {this.state.localeStore.getLocalized("text.app_footer")}
        </div>
      </div>
    );
  }
}

export default Footer;
