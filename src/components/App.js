import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const App = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
