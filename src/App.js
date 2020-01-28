import React from 'react';
import Home from './components/home';
import {Route, Switch} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component= {Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;

