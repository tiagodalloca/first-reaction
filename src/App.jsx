import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './styles/App.css';
import Menu from './Components/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu/>
          <Route exact path="/" component={Home}/>
          <Route path="/Map" component={Map}/>
          <Route path="/Cars" component={Cars}/>
          <Route path="/About" component={About}/>
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

class Map extends Component {
  render() {
    return (
      <div>
        <h1>Map</h1>
      </div>
    );
  }
}

class Cars extends Component {
  render() {
    return (
      <div>
        <h1>Cars</h1>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

export default App;
