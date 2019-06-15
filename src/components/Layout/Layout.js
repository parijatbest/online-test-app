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
        answerStatus: {},
        timeUp: false
    }
    /**
     * Function to handle tabclick event
     */
    handleTabclick = (eventKey) => {
        if (eventKey !== this.state.activeTab) {
            this.setState({ activeTab: eventKey });
        }
    }
    /**
     * Store current question from each section status in state
     */
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
    /**
     * Store all anwer status from each section in state
     */
    handleAnswerStatus = (qID) => {
        const obj = { ...this.state.answerStatus };
        if (!(obj[qID] && obj[qID].answered)) {
            obj[qID] = "unattempted";
        }
        this.setState({ answerStatus: obj });
    }
    /**
     * Selecting on the option store the data in state
     */
    handleRadioClick = (e) => {
        const obj = { ...this.state.answerStatus };
        obj[e.target.name] = {
            answered: e.target.value
        }
        this.setState({ answerStatus: obj });
    }
    /**
     * Handle submit buttton functionality
     * Either user clicked on submit or synthetically happened due to time up
     */
    handleSubmit = (timeUp) => {
        const payload = this.state.answerStatus
        console.log(payload);
        let result = false;
        if(timeUp !== true) {
            result = window.confirm("Are you sure! Once Submitted you can not go back.");
        }
        if (result || (timeUp === true)) {
            // post payload in real server
            /**
             * Ajax call ...
             */
            // clear local storage
            localStorage.removeItem("localState");
            this.setState({ timeUp: true });
            localStorage.removeItem("timeLeftMs");
            // Close the application
            console.log("closing")
        }
    }
    /**
     * Once component mounted first time get value from local storage if available
     */
    componentDidMount = () => {
        const localStorageData = JSON.parse(localStorage.getItem("localState"));
        if (localStorageData) {
            this.setState({
                data: localStorageData.data,
                activeTab: localStorageData.activeTab,
                curQuesNo: localStorageData.curQuesNo,
                answerStatus: localStorageData.answerStatus
            });
        }
    }
    /**
     * Store state data in local storage when component updates
     */
    componentDidUpdate() {
        if(!this.state.timeUp) {
            localStorage.setItem("localState", JSON.stringify(this.state));
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
                            <RightPanel
                                handleSubmit={this.handleSubmit}
                                timeUp={this.state.timeUp} />
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