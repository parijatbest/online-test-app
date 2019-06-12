import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <p className="counter-text">TIME LEFT</p>
                <p className="counter-time">01:10:12</p>
            </div>
        );
    }
}

export default Counter;