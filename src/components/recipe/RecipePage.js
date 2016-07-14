import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadRecipe} from '../../actions/recipeActions';
import RecipeContent from './RecipeContent';
import RecipeRelatedList from './RecipeRelatedList';

class RecipePage extends Component {

    componentWillMount() {
        this.props.loadRecipe(this.props.params.id);
    }

    render() {
        return (
            <div className="row">
                <RecipeContent recipe={this.props.recipe}/>
                <RecipeRelatedList recipes={this.props.recipes}/>
            </div>
        );
    }
}

RecipePage.PropTypes = {

};

function mapStateToProps({recipe, recipes}) {
    return { recipe, recipes };
}

export default connect(mapStateToProps, { loadRecipe })(RecipePage);