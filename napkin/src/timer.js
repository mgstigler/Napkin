import React, { Component } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class Timer extends Component {
    render() {
        return (
            <div className="timer-wrapper">
                <h2 style={{ textAlign: 'center'}}>COUNTDOWN</h2>
                <hr></hr>
                <div className="timer-wrapper">
                <CountdownCircleTimer
                    isPlaying
                    duration={60}
                    colors={[['#ff6347', 0.33], ['#800080', 0.33], ['#F0C987']]}
                    onComplete={() => {
                        this.props.onTimeOut("false");
                        return [false]
                    }}
                >
                    {({ remainingTime }) => {
                        if (remainingTime === 0) {
                            return <div className="timer">TIME'S UP!</div>;
                        }
                        return (
                        <div className="timer">
                            <div className="text" style={{ textAlign: 'center'}}>Remaining</div>
                            <div className="value" style={{ textAlign: 'center'}}>{remainingTime}</div>
                            <div className="text" style={{ textAlign: 'center'}}>seconds</div>
                        </div>
                        );
                    }}
                </CountdownCircleTimer>
                </div>
            </div>
        );
    }
}

export default Timer;
