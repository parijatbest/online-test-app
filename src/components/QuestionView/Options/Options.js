import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Options extends Component {
    render() {
        const {ansOptions, qID, onRadioClick, answerStatus} = this.props;
        let answered = null;
        if(answerStatus[qID] && answerStatus[qID].answered) {
            answered=answerStatus[qID].answered;
            console.log("answered=>", answered);
        }
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
                        onChange={onRadioClick}
                        checked={(answered == optObj.aID) ? true : false}
                    />)
                })}
            </Form>
        );
    }
}

export default Options;