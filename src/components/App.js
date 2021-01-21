import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Main/index';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route></Route>
          <Route></Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App;