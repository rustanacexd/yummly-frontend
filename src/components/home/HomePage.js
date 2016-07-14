import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NavFilter from '../common/NavFilter';
import RecipeCard from '../common/RecipeCard';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavFilter />
        <div className="row">
          {this.props.recipes.map((recipe, i) => {
            return (
              <RecipeCard
                title={recipe.title}
                description={recipe.description}
                rating={recipe.rating}
                category={recipe.category}
                calories={recipe.calories}
                rating={recipe.rating}
                image={recipe.image}
                id={recipe.id}
                key={i}/>
            )
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