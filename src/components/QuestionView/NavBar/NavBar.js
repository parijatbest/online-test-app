import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Nav variant="pills" defaultActiveKey={this.props.activeTab}>
                <Nav.Item>
                    <Nav.Link eventKey="logical" onSelect={this.props.onSelect}>LOGICAL SECTION</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="aptitude" onSelect={this.props.onSelect}>APTITUDE SECTION</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="reasoning" onSelect={this.props.onSelect}>REASONING SECTION</Nav.Link>
                </Nav.Item>
                <a href="javasript:void(0);" className="help-text">Need Help?</a>
            </Nav>
        );
    }
}

export default NavBar;