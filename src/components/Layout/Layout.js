import React, { Component } from 'react';
import QuestionView from '../QuestionView/QuestionView';
import LeftPanel from './../LeftPanel/LeftPanel';
import RightPanel from './../RightPanel/RightPanel';
import { Container, Row, Col } from 'react-bootstrap';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col lg="9" className="left-panel">
                            <LeftPanel />
                        </Col>
                        <Col lg="3" className="right-panel">
                            <RightPanel />
                        </Col>
                    </Row>
                    <QuestionView />
                </Container>
                {/* Modal */}
            </React.Fragment>
        );
    }
}

export default Layout;