import React, { Component } from 'react';
import QBadge from './../QBadge/QBadge';

class QuestionMap extends Component {
    render() {
        const { setCurQuesNo, curQuesNo, activeTab, activeTabData, answerStatus } = this.props;

        return (
            <div className="question-map">
                <h3 className="qmap-heading">Questions in {activeTab} section</h3>
                <div className="qmap-badge">
                    <QBadge
                        answerStatus={answerStatus}
                        activeTabData={activeTabData}
                        curQuesNo={curQuesNo}
                        setCurQuesNo={setCurQuesNo} />
                </div>
                <div className="qmap-legend">
                    <div className="legend answered">Answered</div>
                    <div className="legend unanswered">Unanswered</div>
                    <div className="legend current">Current question</div>
                </div>
            </div>
        );
    }
}

export default QuestionMap;