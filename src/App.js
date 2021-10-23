import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import SearchPage from "./components/SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/search">
            <SearchPage />
            
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
