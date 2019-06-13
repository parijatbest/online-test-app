import React, { Component } from 'react';
import QuestionNavigation from '../QuestionNavigation/QuestionNavigation';
import QuestionMap from './../QuestionMap/QuestionMap';
import Options from './../Options/Options';

class Question extends Component {
    render() {
        const qNo = 1;

        return (
            <div className="question">
                <h2 className="question-heading">Question {qNo}</h2>
                <div className="question-box">
                    <div className="question-desc">How to answer a question in this application?</div>
                    <div className="question-opt">
                        <Options />
                    </div>
                    <QuestionNavigation />
                </div>
                <QuestionMap />
            </div>
        );
    }
}

export default Question;