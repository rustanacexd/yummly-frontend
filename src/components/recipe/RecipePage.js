import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadRecipe} from '../../actions/recipeActions';
import {loadUser} from '../../actions/userActions';
import RecipeContent from './RecipeContent';
import RecipeRelatedList from './RecipeRelatedList';

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

function mapStateToProps({recipe, recipes, user}) {
    return { recipe, recipes, user };
}

export default connect(mapStateToProps, { loadRecipe, loadUser })(RecipePage);