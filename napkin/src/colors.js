import React, { Component } from 'react';

class Colors extends Component {
  render() {
        return (
        <div className="color-guide">
            <div>
            <button className="block pink" onClick={() => this.props.onChange("#EE92C2")}>PINK</button>
            </div><div>
            <button className="block yellow" onClick={() => this.props.onChange("#F0C987")}>YELLOW</button>
            </div><div>
            <button className="block green" onClick={() => this.props.onChange("#008000")}>GREEN</button>
            </div><div>
            <button className="block blue" onClick={() => this.props.onChange("#0000FF")}>BLUE</button>
            </div><div>
            <button className="block orange" onClick={() => this.props.onChange("#FF5733")}>ORANGE</button>
            </div><div>
            <button className="block red" onClick={() => this.props.onChange("#FF0000")}>RED</button>
            </div><div>
            <button className="block purple" onClick={() => this.props.onChange("#800080")}>PURPLE</button>
            </div><div>
            <button className="block black" onClick={() => this.props.onChange("#000000")}>BLACK</button>
            </div><div>
            <button className="block white" onClick={() => this.props.onChange("#FFFFFF")}>WHITE</button>
            </div>
        </div>
        );
    }
}

export default Colors;
