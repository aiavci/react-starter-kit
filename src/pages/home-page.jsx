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
        <h1>
          Sample Home Page
        </h1>
        <p>
          This is sample home page content.
        </p>
      </Page>
    );
  }
}

export default HomePage;
