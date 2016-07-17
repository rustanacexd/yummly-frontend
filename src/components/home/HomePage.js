import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NavFilter from '../common/NavFilter';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import {loadRecipes} from '../../actions/recipeActions.js';


class HomePage extends Component {
  render() {

    if (this.props.loading && !this.props.isLoadMore) {
      return <CircularProgress size={2} style={{ position: 'fixed', top: '45%', left: '45%', zIndex: '999' }}/>
    }

    return (
      <div>
        {this.props.isLoadMore && this.props.loading && <CircularProgress size={2}
          style={{ position: 'fixed', top: '45%', left: '45%', zIndex: '999' }}/>}

        <NavFilter recipes={this.props.recipes} />
        <RaisedButton label="LoadMore" onTouchTap={() => {
          this.props.loadRecipes(this.props.recipes.length + 5, true);
        } }/>
      </div>
    );
  }
}

HomePage.propTypes = {

};

function mapStateToProps({recipes, ajaxCallsInProgress, isLoadMore}, ownProps) {
  return { recipes, loading: ajaxCallsInProgress > 0, isLoadMore }
}

export default connect(mapStateToProps, { loadRecipes })(HomePage);