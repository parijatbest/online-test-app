import React, { Component } from 'react';

class QBadge extends Component {
    render() {
        const questions = [1,2,3,4,5];
        const qBadges = questions.map((qNo,i)=> {
            return <a href="javascipt:void(0);" className="badge badge-pill badge-answered" key={`qBadge${qNo}_${i}`}>{qNo}</a>
        })
        return (
            qBadges
            // <div>
            //     <a href="javascipt:void(0);" className="badge badge-pill badge-answered">1</a> 
            //     <a href="javascipt:void(0);" className="badge badge-pill badge-unanswered">2</a> 
            //     <a href="javascipt:void(0);" className="badge badge-pill badge-current">3</a> 
            //     <a href="javascipt:void(0);" className="badge badge-pill">3</a>
            // </div>
        );
    }
}
export default QBadge;