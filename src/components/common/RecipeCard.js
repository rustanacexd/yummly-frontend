import React from 'react';
import {Link} from 'react-router';

const RecipeCard = ({id, title, image, description, rating, calories}) => {
    return (

        <div className="col s12 m6 l3">
            <div className="card large hoverable">
                <div className="card-image">
                    <img src={image} />
                    <span className="card-title">{title}</span>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <Link to={`/recipe/${id}`}> See ingredients </Link>
                    <span className="right" style={{marginRight: 5}}> Rating: {rating}</span>
                    <span className="right" style={{marginRight: 5}}> Calories: {calories}</span>
                </div>

            </div>
        </div>
    );
};

export default RecipeCard;