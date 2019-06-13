import React, { Component } from 'react';
import QBadge from './../QBadge/QBadge';

class QuestionMap extends Component {
    render() {
        const sectionName = "logical section";
        return (
            <div className="question-map">
                <h3 className="qmap-heading">Questions in {sectionName}</h3>
                <div className="qmap-badge">
                    <QBadge />
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