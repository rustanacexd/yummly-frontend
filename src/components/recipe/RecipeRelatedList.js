import React from 'react';
import RecipeCard from '../common/RecipeCard';

const RecipeRelatedList = ({recipes}) => {
    return (
        <div className="col s12 m4 l3">
            <div className="row">
                {recipes.slice(0,3).map((recipe, i) => {
                    return (
                        <div className="col s12" key={i}>
                           <RecipeCard recipe={recipe} size="small"/> 
                        </div>
                    )
                }) }


            </div>
        </div>
    );
};

export default RecipeRelatedList;