import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getRecipe, getRelatedRecipes} from '../../actions/recipeActions';
import {loadUser} from '../../actions/userActions';
import RecipeContent from './RecipeContent';
import RecipeRelatedList from './RecipeRelatedList';
import Loading from '../common/Loading';

class RecipePage extends Component {
    componentWillMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        let oldId = prevProps.params.id;
        let newId = this.props.params.id;
        if (newId !== oldId) {
            this.fetchData();
        }
    }

    componentWillUnmount() {
        this.ignoreLastFetch = true;
    }

    fetchData() {
        if (!this.ignoreLastFetch) {
            this.props.getRecipe(this.props.params.id).then(() => {
                this.props.loadUser(this.props.recipe.userId);
                this.props.getRelatedRecipes(this.props.recipe.category[0]);
            });
        }
    }

    render() {
        if (this.props.loading) {
            return <Loading />;
        }

        return (
            <div className="row">
                <RecipeContent recipe={this.props.recipe} user={this.props.user}/>
                <RecipeRelatedList recipes={this.props.relatedRecipes.filter(recipe => {
                    return recipe.id !== this.props.recipe.id;
                })}/>
            </div>
        );
    }
}

RecipePage.propTypes = {
    params: PropTypes.object.isRequired,
    getRecipe: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired,
    getRelatedRecipes: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    relatedRecipes: PropTypes.array.isRequired,
};

function mapStateToProps({recipe, relatedRecipes, user, ajaxCallsInProgress}) {
    return {recipe, relatedRecipes, user, loading: ajaxCallsInProgress > 0};
}

export default connect(mapStateToProps, {getRecipe, loadUser, getRelatedRecipes})(RecipePage);
