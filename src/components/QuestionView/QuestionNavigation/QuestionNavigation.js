import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class QuestionNavigation extends Component {
    render() {
        const {setCurQuesNo, curQuesNo, totalQues} = this.props;
        return (
            <div className="question-nav">
                <Button 
                    variant="primary" 
                    className="prev-question"
                    onClick={() => setCurQuesNo(curQuesNo - 1)}
                    disabled={curQuesNo === 1}>Previous Question</Button>
                <Button 
                    variant="primary" 
                    className="next-question" 
                    onClick={() => setCurQuesNo(curQuesNo+1)}
                    disabled={curQuesNo === totalQues}>Next Question</Button>
            </div>
        );
    }
}

export default QuestionNavigation;