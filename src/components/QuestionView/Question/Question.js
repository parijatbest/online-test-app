import React, { Component } from 'react';
import QuestionNavigation from '../QuestionNavigation/QuestionNavigation';
import QuestionMap from './../QuestionMap/QuestionMap';
import Options from './../Options/Options';

class Question extends Component {
    render() {
        console.log(this.props);
        const { activeTab, data, setCurQuesNo, curQuesNo } = this.props;
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
                            qID={data[activeTab].questions[qNo - 1].qID}
                            ansOptions={data[activeTab].questions[qNo - 1].ansOptions} />
                    </div>
                    <QuestionNavigation
                        totalQues={totalQues}
                        curQuesNo={qNo}
                        setCurQuesNo={setCurQuesNo} />
                </div>
                <QuestionMap />
            </div>
        );
    }
}

export default Question;