import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          roomCode: Math.random().toString(36).substring(7),
        };
    }

    render() {
        return (
        <Fragment>
            <div className="home">
                <h1 style={{ textAlign: 'center', fontSize: 300}}>NAPKIN</h1>
                <div className="buttons">
                    <button className="new-game">
                        <Link to={{ pathname: '/game/' + this.state.roomCode}} style={{ textDecoration: 'none', color: 'white' }}>NEW GAME</Link>
                    </button>
                    <button className="join-game">
                        <Link to="/join-game" style={{ textDecoration: 'none', color: 'tomato' }}>JOIN</Link>
                    </button>
                </div>
            </div>
        </Fragment>
        );
    }
}

export default Home;
