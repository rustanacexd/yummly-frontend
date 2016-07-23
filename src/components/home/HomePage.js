import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NavFilter from '../common/NavFilter';
import RaisedButton from 'material-ui/RaisedButton';
import {loadRecipes} from '../../actions/recipeActions.js';
import Loading from '../common/Loading';

class HomePage extends Component {
  render() {
    if (this.props.recipes.length == 0) {
      return <Loading />
    }

    return (
      <div>
        <Loading loading={this.props.isLoadMore && this.props.loading }/>

        <NavFilter recipes={this.props.recipes}/>
        <RaisedButton label="Load More" onTouchTap={() => {
          this.props.loadRecipes(this.props.recipes.length + 5, true);
        } }/>
      </div>
    );
  }
}

HomePage.propTypes = {};

function mapStateToProps({recipes, ajaxCallsInProgress, isLoadMore}, ownProps) {
  return {recipes, loading: ajaxCallsInProgress > 0, isLoadMore}
}

export default connect(mapStateToProps, {loadRecipes})(HomePage);
