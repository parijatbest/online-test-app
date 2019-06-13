import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Question from './Question/Question';
import TestData from '../../data/SampleData';

class QuestionView extends Component {
    state = {
        data: TestData,
        activeTab: "logical",
        curQuesNo: {
            logical: 1,
            aptitude: 1,
            reasoning: 1
        }
    }
    handleTabclick = (eventKey) => {
        this.setState({ activeTab: eventKey });
    }
    setCurQuesNo = (curQuesNo) => {
        if (this.state.activeTab === "logical") {
            this.setState((prevState) => {
                return { 
                    curQuesNo: { 
                        logical: curQuesNo,
                        aptitude: prevState.curQuesNo.aptitude,
                        reasoning: prevState.curQuesNo.reasoning
                    } 
                }
            })
        } else if (this.state.activeTab === "aptitude") {
            this.setState((prevState) => {
                return { 
                    curQuesNo: { 
                        logical: prevState.curQuesNo.logical,
                        aptitude: curQuesNo,
                        reasoning: prevState.curQuesNo.reasoning
                    } 
                }
            })
        } else if (this.state.activeTab === "reasoning") {
            this.setState((prevState) => {
                return { 
                    curQuesNo: { 
                        logical: prevState.curQuesNo.logical,
                        aptitude: prevState.curQuesNo.aptitude,
                        reasoning: curQuesNo
                    } 
                }
            })
        }
    }
    render() {
        return (
            <div className="question-view">
                <NavBar
                    onSelect={this.handleTabclick}
                    activeTab={this.state.activeTab} />
                <Question
                    setCurQuesNo={this.setCurQuesNo}
                    curQuesNo={this.state.curQuesNo}
                    activeTab={this.state.activeTab}
                    data={this.state.data} />
            </div>
        );
    }
}

export default QuestionView;