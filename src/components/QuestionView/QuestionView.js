import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Question from './Question/Question';

class QuestionView extends Component {
    render() {
        return (
            <div className="question-view">
                <NavBar />
                <Question />
            </div>
        );
    }
}

export default QuestionView;