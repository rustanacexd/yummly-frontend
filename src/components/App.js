import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import Notification from '../components/common/Notification';
import {connect} from 'react-redux';



class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Notification message={this.props.notificationMessage.message}
                              open={this.props.notificationMessage.open}/>
            </div>
        );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired
};

function mapStateToProps({notificationMessage}) {
    return { notificationMessage }
}

export default connect(mapStateToProps)(App);
