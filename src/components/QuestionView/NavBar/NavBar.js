import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Nav variant="pills" defaultActiveKey="link-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1">LOGICAL SECTION</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">APTITUDE SECTION</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">REASONING SECTION</Nav.Link>
                </Nav.Item>
                <a href="javasript:void(0);" className="help-text">Need Help?</a>
            </Nav>
        );
    }
}

export default NavBar;