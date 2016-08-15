import React from 'react';
import {Link, browserHistory} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const RecipeCard = ({recipe}) => {
    return (
        <div style={{
            paddingBottom: 20
        }}>
            <Card >
                <CardMedia
                overlay={
                    <CardTitle
                    title={recipe.title} />
                }>
                    <img src={recipe.image} style={{width: 400, height: 400}}/>
                </CardMedia>

                <CardText>
                    {recipe.description}
                </CardText>
                <CardActions>
                    <FlatButton label="See More" onTouchTap={() => {
                        browserHistory.push(`/recipe/${recipe.id}`);
                    } }/>
                    <FlatButton label={`Rating: ${recipe.rating} / 5`} style={{ float: "right" }}/>
                </CardActions>

            </Card>
        </div>

    );
};

export default RecipeCard;
