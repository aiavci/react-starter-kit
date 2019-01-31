import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

import { Helmet } from "react-helmet";

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <meta name="title" content ="Ali Avc's react-starter-kit home page" />
        </Helmet>
        {this.state.localeStore.getLocalized("text.app_name")}
      </Page>
    );
  }
}

export default HomePage;
