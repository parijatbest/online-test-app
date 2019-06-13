import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Options extends Component {
    render() {
        const options = ["Sample answer 1", "Sample answer 2", "Sample answer 3", "Sample answer 4"];

        return (
            <Form>
                {options.map((opt, ind) => {
                    return (<Form.Check
                        custom
                        type="radio"
                        name="logical-q1-opt"
                        id={`logical-q1-${ind}`}
                        key={`logical-q1-${ind}`}
                        label={opt}
                    />)
                })}
            </Form>
        );
    }
}

export default Options;