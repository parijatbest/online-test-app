import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class Counter extends Component {
    onHandleTick = (timeLeftObj) => {
        localStorage.setItem("timeLeftMs", timeLeftObj.total);
    }
    render() {
        let timeLeftMs = 3 * 1000;
        // let timeLeftMs = 2 * 60 * 60 * 1000;
        const localStorageData = parseInt(localStorage.getItem("timeLeftMs"));
        if (localStorageData) {
             timeLeftMs = localStorageData;
        }
        // Random component
        const Completionist = () => <span>You are good to go!</span>;

        // Renderer callback with condition
        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return <Completionist />;
            } else {
                // Render a countdown
                return (
                    <div className="counter">
                        <p className="counter-text">TIME LEFT</p>
                        <p className="counter-time">{hours}:{minutes}:{seconds}</p>
                    </div>
                );
            }
        };

        return (
            <Countdown
                date={Date.now() + timeLeftMs}
                // zeroPadTime={2}
                renderer={renderer}
                onTick={this.onHandleTick}
            />
        );
    }
}

export default Counter;