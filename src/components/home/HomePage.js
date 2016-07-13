import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import NavFilter from '../../components/common/NavFilter';

class HomePage extends Component {
  render() {
    return (
      <div>
          <NavFilter />
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;