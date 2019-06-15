import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalUI extends Component {
    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header closeButton>
                    <Modal.Title>Oops!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>The time has expired. Thank you for using the application!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalUI;