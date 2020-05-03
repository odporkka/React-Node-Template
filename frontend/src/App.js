import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;
