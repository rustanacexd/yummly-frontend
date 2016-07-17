import React from 'react';
import {Link, browserHistory} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



const RecipeCard = ({recipe}) => {
    return (
        <Card>
            <CardMedia overlay={<CardTitle title={recipe.title} subtitle={recipe.title} />}>
                <img src="http://placehold.it/300x300/" />
            </CardMedia>

            <CardText>
                {recipe.description}
            </CardText>
            <CardActions>
                <FlatButton label="See More" onTouchTap={() => {
                    browserHistory.push(`/recipe/${recipe.id}`);
                }}/>
                <FlatButton label={`Rating: ${recipe.rating} / 5`} style={{ float: "right" }}/>
            </CardActions>

        </Card>

    );
};

export default RecipeCard;