import React from 'react';
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
import Navbar from '../Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../Login";

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/">
          <div className="App">
            <Navbar/>
            <main>
              <Filter />
              <Shelf />
            </main>
            <FloatCart />
          </div>
        </Route>
      </Switch>
    </React.Fragment>
  </Router>
);
export default App;
