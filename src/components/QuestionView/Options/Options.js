import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Options extends Component {
    render() {
        const {ansOptions, qID} = this.props;

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
                    />)
                })}
            </Form>
        );
    }
}

export default Options;