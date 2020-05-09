import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom";


import './App.css';

class JoinGame extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', redirect: null};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        this.setState({ redirect: "/game/" + this.state.value });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="home">
                <h1>
                    <Link to="/" style={{ textDecoration: 'none', textAlign: 'left', paddingLeft: '100px', fontSize: '400' }}>NAPKIN</Link>
                </h1>
                <h1 style={{ textAlign: 'center', fontSize: 200}}>ROOM CODE</h1>
                <div className="roomCode">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} style={{ height: '100px', width: '600px'}}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default JoinGame;