import React from 'react';
import RecipeCard from '../common/RecipeCard';

const RecipeList = ({recipes}) => {
    return (
        <div className="row">
            {recipes.map((recipe, i) => {
                return (
                    <div className="col-sm-4" style={{
                        paddingBottom: 20
                    }}>
                        <RecipeCard
                            key={i}
                            recipe={recipe}
                            />
                    </div>
                )
            }) }
        </div>
    );
};

export default RecipeList;