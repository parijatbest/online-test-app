import React, { Component } from 'react';
import QuestionNavigation from '../QuestionNavigation/QuestionNavigation';
import QuestionMap from './../QuestionMap/QuestionMap';
import Options from './../Options/Options';

class Question extends Component {
    componentDidMount() {
        const { activeTab, data, curQuesNo, handleAnswerStatus } = this.props;
        const qNo = curQuesNo[activeTab];
        const qId = data[activeTab].questions[qNo - 1].qID;
        handleAnswerStatus(qId);
    }
    render() {
        const { activeTab, data, setCurQuesNo, curQuesNo, answerStatus, onRadioClick } = this.props;
        const qNo = curQuesNo[activeTab];
        const totalQues = data[activeTab].questions.length;
        return (
            <div className="question">
                <h2 className="question-heading">Question {qNo}</h2>
                <div className="question-box">
                    <div className="question-desc">
                        {data[activeTab].questions[qNo - 1].qDesc}
                    </div>
                    <div className="question-opt">
                        <Options
                            onRadioClick={onRadioClick}
                            qID={data[activeTab].questions[qNo - 1].qID}
                            ansOptions={data[activeTab].questions[qNo - 1].ansOptions} />
                    </div>
                    <QuestionNavigation
                        qID={data[activeTab].questions[qNo - 1].qID}
                        totalQues={totalQues}
                        curQuesNo={qNo}
                        setCurQuesNo={setCurQuesNo} />
                </div>
                <QuestionMap
                    answerStatus={answerStatus}
                    activeTabData={data[activeTab]}
                    activeTab={activeTab}
                    totalQues={totalQues}
                    curQuesNo={qNo}
                    setCurQuesNo={setCurQuesNo} />
            </div>
        );
    }
}

export default Question;