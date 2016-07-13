import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import NavFilter from '../common/NavFilter';
import RecipeCard from '../common/RecipeCard';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavFilter />
        <div className="row">
          {this.props.recipes.map((recipe, i) => {
            return <RecipeCard title={recipe.title} image={recipe.image} key={i}/>
          }) }
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {

};

function mapStateToProps({recipes}, ownProps) {
  return { recipes }
}

export default connect(mapStateToProps)(HomePage);