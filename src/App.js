import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Provider } from "mobx-react";

/**
 * Mobx stores
 */
import { LocaleStore } from "./mobx";

/**
 * Components
 */
import { Header, NavigationMenu } from "./components"

/**
 * Pages
 */
import { HomePage } from "./pages"

class App extends Component {
  render() {
    return (
      <Provider LocaleStore = {LocaleStore}>
        <Router>
          <Header />
          <div className = "App-Content">
            <NavigationMenu />
            <Route path = "/" exact component = { HomePage } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
