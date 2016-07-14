import React from 'react';
import {Link} from 'react-router';

const RecipeCard = ({recipe, size}) => {
    return (
        <div className={`card ${size} hoverable`}>
            <div className="card-image">
                <img src={recipe.image} />
                <span className="card-title">{recipe.title}</span>
            </div>
            <div className="card-content">
                <p>{recipe.description}</p>
            </div>
            <div className="card-action">
                <Link to={`/recipe/${recipe.id}`}> See ingredients </Link>
                <span className="right" style={{ marginRight: 5 }}> Rating: {recipe.rating}</span>
                <span className="right" style={{ marginRight: 5 }}> Calories: {recipe.calories}</span>
            </div>

        </div>

    );
};

export default RecipeCard;