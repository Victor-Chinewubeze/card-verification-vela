import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./views/Home'));
const Stats = lazy(() => import('./views/Stats'));


export default function Root() {
  return (
      <Router>
        <Suspense fallback="Please Wait ...">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/stats" component={Stats}/>
          </Switch>
        </Suspense>
      </Router>
  );
}
