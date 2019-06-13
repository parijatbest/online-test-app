import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Question from './Question/Question';

class QuestionView extends Component {
    render() {
        const { handleTabclick, setCurQuesNo, handleRadioClick,
            handleAnswerStatus, activeTab,
            curQuesNo, answerStatus,
            data } = this.props;
        return (
            <div className="question-view">
                <NavBar
                    onSelect={handleTabclick}
                    activeTab={activeTab} />
                <Question
                    setCurQuesNo={setCurQuesNo}
                    handleAnswerStatus={handleAnswerStatus}
                    curQuesNo={curQuesNo}
                    activeTab={activeTab}
                    answerStatus={answerStatus}
                    onRadioClick={handleRadioClick}
                    data={data} />
            </div>
        );
    }
}

export default QuestionView;