import React, { Component } from 'react';
import Countdown, {zeroPad} from 'react-countdown-now';
import ModalUI from './../ModalUI/ModalUI';

class Counter extends Component {
    state = {
        showModal: true
    }
    /**
     * Function to save time left details in local storage
     */
    onHandleTick = (timeLeftObj) => {
        localStorage.setItem("timeLeftMs", timeLeftObj.total);
    }
    /**
     * Handle modal close event when time up
     */
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
                        <p className="counter-time">{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</p>
                    </div>
                );
            }
        };

        return (
            <Countdown
                date={Date.now() + timeLeftMs}
                renderer={renderer}
                onTick={this.onHandleTick}
            />
        );
    }
}

export default Counter;