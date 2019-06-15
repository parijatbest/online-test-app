import React, { Component } from 'react';

class QBadge extends Component {
    render() {
        const { activeTabData, setCurQuesNo, answerStatus, curQuesNo } = this.props;
        /**
         * Open the corresponding question related to each badge on click
         * @param {*} e 
         * @param {*} curInd 
         */
        const onBadgeClick = (e, curInd) => {
            e.preventDefault();
            if (curInd !== curQuesNo) {
                setCurQuesNo(parseInt(e.target.getAttribute("data-qno")), e.target.id);
            }
        }
        /**
         * Passing appropriate badge class for answered and unanswered
         * @param {*} key 
         * @param {*} index 
         */
        const checkBadge = (key, index) => {
            let badgeClass = "";
            if (answerStatus && answerStatus[key]) {
                badgeClass = "badge-unanswered";
                if (answerStatus[key].answered) {
                    badgeClass = "badge-answered";
                }
            }
            if (curQuesNo === index + 1) {
                badgeClass += " badge-current";
            }
            return badgeClass;
        }
        /**
         * Generate badges based on question and answer status
         */
        const qBadges = activeTabData.questions.map((qObj, ind) => {
            const badgeClass = checkBadge(qObj.qID, ind);
            return <button
                data-qno={ind + 1}
                id={qObj.qID}
                className={`badge badge-pill ${badgeClass}`}
                onClick={(e) => onBadgeClick(e, ind + 1)}
                key={qObj.qID}>
                {ind + 1}
            </button>
        })
        return qBadges;
    }
}
export default QBadge;