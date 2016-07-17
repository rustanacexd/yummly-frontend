import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                
            </div>
        );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
