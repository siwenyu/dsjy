import React from 'react';
import { Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './page/Home';
import Student from './page/Student';
import Unit from './page/Unit';
import Branch from './page/Branch';
import About from './page/About';
import Lianmeng from './page/Lianmeng';

import { routeList } from './router';

const renderRoute = () => {
  return routeList.map(e => {
    return <Route key={e.path} exact path={e.path} component={e.pageComponent} />
  });
}

console.log(renderRoute());
// 设置全局属性
const defaultLogo = require('./assets/images/defaultlogo.png');
window.defaultLogo = defaultLogo;

function App() {
  return (
    <Router>
      <Switch>
        {renderRoute()}
        <Route exact path="/unit" component={Unit} />
        <Route exact path="/branch" component={Branch} />
        <Route exact path="/about" component={About} />
        <Route exact path="/lianmeng" component={Lianmeng} />
        <Redirect to="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
