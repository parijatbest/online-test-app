import React, { Component } from 'react';
import QuestionView from '../QuestionView/QuestionView';
import LeftPanel from './../LeftPanel/LeftPanel';
import RightPanel from './../RightPanel/RightPanel';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <LeftPanel />
                    <RightPanel />
                    <QuestionView />
                </main>
                {/* Modal */}
            </React.Fragment>
        );
    }
}

export default Layout;