import React, { Component } from 'react';

class LoginStatus extends Component {
    render() {
        const isLoggedIn = true;// Will be evaluated from login service in actual implementation
        return (
            !isLoggedIn ? null : (
                <div className="login-status">
                    <p className="login-status-msg">LOGGED IN AS</p>
                    <p className="login-status-id">10STUHHCS0011</p>
                </div>
            )
        )
    }
}

export default LoginStatus;