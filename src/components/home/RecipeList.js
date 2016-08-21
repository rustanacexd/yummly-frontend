import React, {PropTypes} from 'react';
import RecipeCard from '../common/RecipeCard';

const RecipeList = ({recipes}) => {
    return (
        <div className="row">
            {recipes.map((recipe, i) => {
                return (
                    <div key={i} className="col-sm-6 col-md-3">
                        <RecipeCard recipe={recipe}/>
                    </div>
                );
            })}
        </div>
    );
};

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired
};

export default RecipeList;
