import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Home from './Home';
import App from './App';
import Game from './Game';
import JoinGame from './JoinGame';
import registerServiceWorker from './registerServiceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/game/:roomCode" component={Game} />
        <Route path="/join-game" component={JoinGame} />
        <Route path="/drawing" component={App} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
