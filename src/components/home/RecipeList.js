import React from 'react';
import RecipeCard from '../common/RecipeCard';

const RecipeList = ({recipes}) => {
    return (
        <div className="row">
            {recipes.map((recipe, i) => {
                return (
                    <div className="col s12 m6 l3"  key={recipe.id}>
                        <RecipeCard
                            size="large"
                            recipe={recipe}
                            />
                    </div>
                )
            }) }
        </div>
    );
};

export default RecipeList;