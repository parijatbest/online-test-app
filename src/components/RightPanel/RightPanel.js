import React, { Component } from 'react';
import LoginStatus from '../LoginStatus/LoginStatus';
import Counter from '../Counter/Counter';

class RightPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginStatus />
                <Counter />
            </React.Fragment>
        );
    }
}

export default RightPanel;