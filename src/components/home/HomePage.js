import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NavFilter from '../common/NavFilter';
import RecipeList from './RecipeList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavFilter />
        <RecipeList recipes={this.props.recipes}/>
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