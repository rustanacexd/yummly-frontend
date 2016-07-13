import React from 'react';

const Header = () => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
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