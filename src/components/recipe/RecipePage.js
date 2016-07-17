import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadRecipe} from '../../actions/recipeActions';
import {loadUser} from '../../actions/userActions';
import RecipeContent from './RecipeContent';
import RecipeRelatedList from './RecipeRelatedList';
import CircularProgress from 'material-ui/CircularProgress';

class RecipePage extends Component {

    componentWillMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        let oldId = prevProps.params.id
        let newId = this.props.params.id
        if (newId !== oldId) {
            this.fetchData();
        }
    }

    fetchData() {
        this.props.loadRecipe(this.props.params.id).then(recipe => {
            this.props.loadUser(this.props.recipe.userId);
        });
    }

    render() {
        if (this.props.loading) {
            return <CircularProgress size={2} style={{ position: 'absolute', top: '45%', left: '45%', zIndex: '999' }}/>
        }

        return (
            <div className="row">
                <RecipeContent recipe={this.props.recipe} user={this.props.user}/>
                <RecipeRelatedList recipes={this.props.recipes.filter(recipe => {
                    return recipe.id !== this.props.recipe.id;
                }) }/>
            </div>
        );
    }
}

RecipePage.PropTypes = {

};

function mapStateToProps({recipe, recipes, user, ajaxCallsInProgress}) {
    return { recipe, recipes, user, loading: ajaxCallsInProgress > 0 };
}

export default connect(mapStateToProps, { loadRecipe, loadUser })(RecipePage);