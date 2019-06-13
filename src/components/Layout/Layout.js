import React, { Component } from 'react';
import QuestionView from '../QuestionView/QuestionView';
import LeftPanel from './../LeftPanel/LeftPanel';
import RightPanel from './../RightPanel/RightPanel';
import { Container, Row, Col } from 'react-bootstrap';
import TestData from '../../data/SampleData';

class Layout extends Component {
    state = {
        data: TestData,
        activeTab: "logical",
        curQuesNo: {
            logical: 1,
            aptitude: 1,
            reasoning: 1
        },
        answerStatus: {}
    }
    handleTabclick = (eventKey) => {
        this.setState({ activeTab: eventKey });
    }
    setCurQuesNo = (curQuesNo, qID) => {
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
        this.handleAnswerStatus(qID);
    }
    handleAnswerStatus = (qID) => {
        const obj = { ...this.state.answerStatus };
        if (!(obj[qID] && obj[qID].answered)) {
            obj[qID] = "unattempted";
        }
        this.setState({ answerStatus: obj });
    }
    handleRadioClick = (e) => {
        const obj = { ...this.state.answerStatus };
        obj[e.target.name] = {
            answered: e.target.value
        }
        this.setState({ answerStatus: obj });
    }
    handleSubmit = () => {
        const payload = this.state.answerStatus
        console.log(payload);
        const result = window.confirm("Are you sure! Once Submitted you can not go back.");
        if (result) {
            // post payload in real server
            // Close the application
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row className="layout">
                        <Col lg="9" className="left-panel">
                            <LeftPanel onSubmitClick={this.handleSubmit} />
                        </Col>
                        <Col lg="3" className="right-panel">
                            <RightPanel />
                        </Col>
                    </Row>
                    <QuestionView
                        handleTabclick={this.handleTabclick}
                        setCurQuesNo={this.setCurQuesNo}
                        handleRadioClick={this.handleRadioClick}
                        handleAnswerStatus={this.handleAnswerStatus}
                        activeTab={this.state.activeTab}
                        curQuesNo={this.state.curQuesNo}
                        answerStatus={this.state.answerStatus}
                        data={this.state.data}
                    />
                </Container>
            </React.Fragment>
        );
    }
}

export default Layout;