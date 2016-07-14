import React from 'react';
import {IndexLink} from 'react-router';

const Header = () => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <IndexLink to="/" className="brand-logo"> Yummly! </IndexLink>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>

                </div>
            </nav>

            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
        </div>


    );
};

export default Header;