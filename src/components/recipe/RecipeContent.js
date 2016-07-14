import React from 'react';


const recipeDetailStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center'
};

const RecipeContent = ({recipe}) => {
    return (
        <div className="col s12 m8 l9">
            <div className="container">
                <div className="section">
                    <div className="card medium">
                        <div className="card-image">
                            <img src={recipe.image} />
                            <span className="card-title">{recipe.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{recipe.description}</p>
                        </div>

                    </div>
                </div>
                <div style={recipeDetailStyles}>
                    <div className="item">
                        <div>Ingredients</div>
                        <div>
                            {recipe.ingredientsCount}
                        </div>
                        <div>
                            Count
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            Nutrition
                        </div>
                        <div>
                            {recipe.calories}
                        </div>
                        <div>
                            Calories
                        </div>
                    </div>

                    <div className="item">
                        <div>
                            Total Time
                        </div>
                        <div>
                            {recipe.totalTime}
                        </div>
                        <div>
                            Minutes
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            Rating
                        </div>
                        <div>
                            {recipe.averageRating}
                        </div>
                        <div>
                            {recipe.numberOfReviews} Review(s)
                        </div>
                    </div>
                </div>

                <div className="section">
                    <table className="center highlight responsive">
                        <thead>
                            <tr>
                                {Object.keys(recipe.taste).map((key, i) => {
                                    return <th className="center-align" key={i} data-field="id">{key}</th>
                                }) }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {Object.keys(recipe.taste).map((key, i) => {
                                    return <td className="center-align" key={i}>{recipe.taste[key]}</td>
                                }) }
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section chips">
                    {recipe.tags.map((tag, i) => {
                        return (
                            <div className="chip" key={i}>
                                {tag}
                            </div>
                        );
                    }) }

                </div>

                <div className="section">
                    <table className="striped center highlight responsive">
                        <thead>
                            <tr>
                                <th data-field="id">Ingredients</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipe.ingredients.map((ingredient, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{ingredient}</td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecipeContent;