import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', users: []};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
      }
    
    handleSubmit(event) {
        fetch(`http://localhost:4000/players/${this.props.match.params.roomCode}/${this.state.username}`, {
        method: 'post',
        });
    }

    fetchUsers() {
        fetch(`http://localhost:4000/players/${this.props.match.params.roomCode}`)
        .then(response => response.json())
        .then(data => this.setState({ users: data }));
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch(`http://localhost:4000/players/${this.props.match.params.roomCode}`)
        .then(response => response.json())
        .then(data => 
            this.setState({ users: data }));
    }

    render() {
        return (
        <Fragment>
            <h1>
                <Link to="/" style={{ textDecoration: 'none', textAlign: 'left', paddingLeft: '100px', fontSize: '400' }}>NAPKIN</Link>
            </h1>
            <div style={{ paddingLeft: 50}}>
                <h3 className="roomCodeBlock" style={{fontSize: 50, textAlign: 'center'}}>ROOM CODE: {this.props.match.params.roomCode}</h3>
                <div className="usernameSubmit">
                    <form onSubmit={this.handleSubmit}>
                        <h3 style={{fontSize: 30}}>USERNAME: </h3>
                        <input type="text" value={this.state.value} onChange={this.handleChange} style={{ height: '50px', width: '300px'}}/>
                    </form>
                </div>
                <div className="playerBox">
                    <div className="playerList">
                        {this.state.users.map(user => <li>{user}</li>)}
                    </div>
                </div>
            </div>
        </Fragment>
        );
    }
}

export default Game;