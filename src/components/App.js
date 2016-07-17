import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Header from './common/Header';
import Footer from './common/Footer';
import CircularProgress from 'material-ui/CircularProgress';


class App extends Component {

    render() {
            return (
                <div>
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired
};


export default App;
