import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

import { Page } from "../components"

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
      <Page>
        {this.state.localeStore.getLocalized("text.app_name")}
      </Page>
    );
  }
}

export default HomePage;
