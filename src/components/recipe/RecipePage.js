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
        const {params, getRecipe, recipe, loadUser, getRelatedRecipes} = this.props;

        if (!this.ignoreLastFetch) {
            getRecipe(params.id).then(() => {
                loadUser(recipe.userId);
                getRelatedRecipes(recipe.category[0]);
            });
        }
    }

    render() {
        const {loading, recipe, user, relatedRecipes} = this.props;

        if (loading) {
            return <Loading />;
        }

        return (
            <div className="row">
                <RecipeContent recipe={recipe} user={user}/>
                <RecipeRelatedList recipes={relatedRecipes.filter(recipe_ => {
                    return recipe_.id !== recipe.id;
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

function mapStateToProps({relatedRecipes, recipe, recipes, user, ajaxCallsInProgress}) {
    return {relatedRecipes, recipe, recipes, user, loading: ajaxCallsInProgress > 0};
}

export default connect(mapStateToProps, {getRecipe, loadUser, getRelatedRecipes})(RecipePage);
