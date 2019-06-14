import React, { Component } from 'react';

class QBadge extends Component {
    render() {
        const { activeTabData, setCurQuesNo, answerStatus, curQuesNo } = this.props;
        const onBadgeClick = (e, curInd) => {
            e.preventDefault();
            if(curInd !== curQuesNo) {
                setCurQuesNo(parseInt(e.target.getAttribute("data-qno")), e.target.id);
            }
        }
        const checkBadge = (key, index) => {
            let badgeClass = "";
            if(answerStatus && answerStatus[key]) {
                badgeClass = "badge-unanswered";
                if(answerStatus[key].answered) {
                    badgeClass = "badge-answered";
                }
            }
            if(curQuesNo == index + 1) {
                badgeClass += " badge-current";
            }
            return badgeClass;
        }
        const qBadges = activeTabData.questions.map((qObj, ind) => {
            const badgeClass = checkBadge(qObj.qID, ind);
            return <a
                data-qno={ind + 1}
                id={qObj.qID}
                href="#"
                className={`badge badge-pill ${badgeClass}`}
                onClick={(e) => onBadgeClick(e, ind + 1)}
                key={qObj.qID}>
                {ind + 1}
            </a>
        })
    
        return qBadges;
    }
}
export default QBadge;