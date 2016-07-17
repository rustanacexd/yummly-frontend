import React from 'react';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const RecipeCard = ({recipe}) => {
    return (
        <Card>
            <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="http://placehold.it/100x100"
                />
            <CardMedia
                overlay={<CardTitle title={recipe.title} subtitle={recipe.title} />}
                >
                <img src="http://placehold.it/300x300/" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
                {recipe.description}
            </CardText>
            <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
            </CardActions>

        </Card>

    );
};

export default RecipeCard;