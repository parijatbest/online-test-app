import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class QuestionNavigation extends Component {
    render() {
        return (
            <div className="question-nav">
                <Button variant="primary" className="prev-question">Previous Question</Button>
                <Button variant="primary" className="next-question">Next Question</Button>
            </div>
        );
    }
}

export default QuestionNavigation;