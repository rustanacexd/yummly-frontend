import React from 'react';
import RecipeCard from '../common/RecipeCard';

const RecipeList = ({recipes}) => {
    return (
        <div className="row">
            {recipes.map((recipe, i) => {
                return (
                    <div key={i} className="col-sm-6 col-md-3" style={{
                        paddingBottom: 20
                    }}>
                        <RecipeCard
                            recipe={recipe}
                            />
                    </div>
                )
            }) }
        </div>
    );
};

export default RecipeList;