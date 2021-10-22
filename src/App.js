import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/search">
            {/* <SearchPage /> */}
            <h1>This is search page </h1>
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* <h1>Shivam Google Clone </h1> */}
      {/* <Home/> */}
      </Router>
    </div>
  );
}

export default App;
