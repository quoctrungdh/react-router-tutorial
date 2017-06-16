import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

const Home = () => (
  <h1>Home</h1>
)

const About = () => (
  <h1>About</h1>
)

const Topic = (props) => {
  return (
    <h1>{props.match.params.topicId}</h1>
  )
}

const Topics = props => {
  const { match } = props;
  return (
    <div>
      <h1>
        Topics
      </h1>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Render with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
