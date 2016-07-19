import React from 'react';
import RecipeCard from '../common/RecipeCard';

const RecipeRelatedList = ({recipes}) => {
    return (
        <div className="col-sm-5 col-md-3">
            {recipes.slice(0, 3).map((recipe, i) => {
                return <RecipeCard key={i} recipe={recipe} size="medium"/>
            }) }
        </div>
    );
};

export default RecipeRelatedList;