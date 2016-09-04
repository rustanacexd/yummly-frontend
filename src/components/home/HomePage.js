import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NavFilter from '../common/NavFilter';
import RaisedButton from 'material-ui/RaisedButton';
import {loadRecipes} from '../../actions/recipeActions.js';
import Loading from '../common/Loading';

class HomePage extends Component {
    componentWillMount() {
        this.props.loadRecipes(40);
    }

    render() {

        const {recipes, isLoadMore, loading, loadRecipes } = this.props;

        if (recipes.length == 0) {
            return <Loading />;
        }

        return (
            <div>
                <Loading loading={isLoadMore && loading }/>

                <NavFilter recipes={recipes}/>
                <RaisedButton label="Load More" onTouchTap={() => {
                    loadRecipes(recipes.length + 10, true);
                } }/>
            </div>
        );
    }
}

HomePage.propTypes = {
    loadRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
    isLoadMore: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired

};

function mapStateToProps({recipes, ajaxCallsInProgress, isLoadMore}) {
    return {recipes, loading: ajaxCallsInProgress > 0, isLoadMore};
}

export default connect(mapStateToProps, {loadRecipes})(HomePage);
