import React, { Component } from 'react';

class Prompt extends Component {
  render() {
        return (
        <div className="prompt">
            <h2 style={{ textAlign: 'center'}}>PROMPT</h2>
            <hr></hr>
            <div className="block adjective">
                <p>ADJECTIVE</p>
            </div>
            <div className="block noun">
                <p>NOUN</p>
            </div>
        </div>
        );
    }
}

export default Prompt;
