import React, { Component } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Provider } from "mobx-react";

/**
 * Mobx stores
 */
import { localeStore } from "./mobx";

/**
 * Components
 */
import { Header, Footer, HeaderMenu } from "./containers"

/**
 * Pages
 */
import { HomePage } from "./pages"

class App extends Component {
  render() {
    return (
      <Provider localeStore = {localeStore}>
        <Router>
          <div>
            <Header />
            <HeaderMenu />
            <Route path = "/" exact component = { HomePage } />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
