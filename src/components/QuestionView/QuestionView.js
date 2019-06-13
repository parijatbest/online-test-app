import React, { Component } from 'react';
import NavBar from './NavBar/NavBar'

class QuestionView extends Component {
    render() {
        return (
            <div className="question-view">
                <NavBar />
                <div>
                    {/* Question Comp */}
                    {/* {this.props.children} */}
                </div>
                {/* QuestionMap */}
            </div>
        );
    }
}

export default QuestionView;