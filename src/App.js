import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./components/Home";
import Commits from "./components/Commits";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:user/:repo/commits" component={Commits} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
