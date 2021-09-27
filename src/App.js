// import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Basic from './Basic';
import Data from './Data';


function App() {
  const [data, setdata] = useState()
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Basic setdata={setdata} />
          </Route>
          <Route exact path="/showdata">
            <Data data={data}/>
        </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
