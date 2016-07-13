import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import NavFilter from '../common/NavFilter';
import RecipeCard from '../common/RecipeCard';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavFilter />
        <div className="row">
          {[...Array(10)].map((_, i) => {
            return <RecipeCard key={i}/>
          }) }
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {

};

export default HomePage;