import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Options extends Component {
    render() {
        const {ansOptions, qID, onRadioClick} = this.props;

        return (
            <Form>
                {ansOptions.map((optObj) => {
                    return (<Form.Check
                        custom
                        type="radio"
                        name={qID}
                        id={optObj.aID}
                        key={optObj.aID}
                        label={optObj.aDesc}
                        value={optObj.aID}
                        onClick={onRadioClick}
                    />)
                })}
            </Form>
        );
    }
}

export default Options;