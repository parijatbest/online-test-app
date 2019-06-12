import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class LeftPanel extends Component {
    render() {
        return (
            <div>
                <Button type="submit" variant="primary" className="submit-test">SUBMIT TEST</Button>
            </div>
        );
    }
}

export default LeftPanel;