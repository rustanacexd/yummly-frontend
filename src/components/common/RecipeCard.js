import React from 'react';

const RecipeCard = () => {
    return (        
            <div className="col s12 m6 l3">
                <div className="card medium hoverable">
                    <div className="card-image">
                        <img src="http://placehold.it/400/400/" />
                        <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card.I am good at containing small bits of information.I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
    );
};

export default RecipeCard;