import React from 'react';

const centerStyle = {
    display: 'flex',
    justifyContent: 'center'
};

const NavFilter = () => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <div className="row" style={centerStyle}>
                            <ul className="hide-on-small-only">
                                <li><a href="sass.html">Sass</a></li>
                                <li><a href="badges.html">Components</a></li>
                                <li><a href="collapsible.html">JavaScript</a></li>
                                <li><a href="sass.html">Sass</a></li>
                                <li><a href="badges.html">Components</a></li>
                                <li><a href="collapsible.html">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavFilter;