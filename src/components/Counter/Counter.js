import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import ModalUI from './../ModalUI/ModalUI';

class Counter extends Component {
    state = {
        showModal: true
    }
    onHandleTick = (timeLeftObj) => {
        localStorage.setItem("timeLeftMs", timeLeftObj.total);
    }
    handleClose = () => {
        this.setState({ showModal: false });
        this.props.handleSubmit(true);
    }
    render() {
        let timeLeftMs = 2 * 60 * 60 * 1000;
        const localStorageData = parseInt(localStorage.getItem("timeLeftMs"));
        if (localStorageData) {
            timeLeftMs = localStorageData;
        }

        // Renderer callback with condition
        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return <ModalUI
                    show={this.state.showModal}
                    handleClose={this.handleClose} />;
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