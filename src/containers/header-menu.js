import React, { Component } from 'react';

import { inject, observer } from "mobx-react";

import { withRouter } from "react-router-dom";

import { NavigationBar, NavigationItem } from '../components';

/**
 * Sample header menu
 */
@inject("localeStore") @withRouter @observer
class HeaderMenu extends Component {
	constructor(props) {
    super(props);

    this.state = {
      localeStore: props.localeStore
    }
  }

  render() {
    const homePageTitle = this.state.localeStore.getLocalized("text.home_page")

    return (
      <NavigationBar>
        <NavigationItem linkUrl = "/" linkTitle = { homePageTitle } />
      </NavigationBar>
    );
  }
}

export default HeaderMenu;
