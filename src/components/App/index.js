import React from 'react';
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
import Navbar from '../Navbar';
import { Route, Switch} from 'react-router-dom';
import Login from "../Login";

const App = () => (
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
);
export default App;
