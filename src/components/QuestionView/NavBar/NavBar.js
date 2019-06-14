import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        const activeTab = this.props.activeTab;
        return (
            // <Nav variant="pills" defaultActiveKey={this.props.activeTab}>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link
                        eventKey="logical"
                        className={activeTab === "logical" ? "active" : ""}
                        onSelect={this.props.onSelect}>LOGICAL SECTION</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="aptitude"
                        className={activeTab === "aptitude" ? "active" : ""}
                        onSelect={this.props.onSelect}>APTITUDE SECTION</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="reasoning"
                        className={activeTab === "reasoning" ? "active" : ""}
                        onSelect={this.props.onSelect}>REASONING SECTION</Nav.Link>
                </Nav.Item>
                <a href="javasript:void(0);" className="help-text">Need Help?</a>
            </Nav>
        );
    }
}

export default NavBar;