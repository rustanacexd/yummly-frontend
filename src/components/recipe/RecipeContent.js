import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Chip from 'material-ui/Chip';
import '../../styles/recipe.scss';

const renderIngredients = (ingredients) => {
    return ingredients.map((ingredient, index) => {
        return (
            <div key={index}>
                <ListItem primaryText={ingredient} disabled={true}/>
                <Divider />
            </div>
        );
    });
};

const renderTags = (tags) => {
    return tags.map((tag, index) => {
        return (
            <Chip className="tag" key={index}>
                {tag}
            </Chip>
        );
    });
};

const RecipeContent = ({recipe, user}) => {
    return (
        <div className="col-sm-7 col-md-9">
            <Card>
                <CardHeader
                    title={user.username}
                    subtitle={user.website}
                    avatar={user.avatar}
                />
                <CardMedia
                    style={{display: 'flex', justifyContent: 'center'}}
                    overlay={<CardTitle title={recipe.title} subtitle={recipe.description}/>}
                >
                    <img src={recipe.image || 'http://placehold.it/500x500 '} style={{maxWidth: 500}}/>
                </CardMedia>
                <CardText>
                    <List>
                        <Subheader>Ingredients</Subheader>
                        {renderIngredients(recipe.ingredients) }

                    </List>
                </CardText>
                <CardActions className="info-wrapper">
                    <div className="info-label">Category:
                        <span> {recipe.category}</span>
                    </div>

                    <div className="info-label">Rating:
                        <span> {recipe.rating} / 5 ({recipe.numberOfReviews || 0})</span>
                    </div>

                    <div className="info-label">Calories:
                        <span> {recipe.calories}</span>
                    </div>
                    <div className="info-label">Total Time:
                        <span> {recipe.totalTime} minutes </span>
                    </div>

                    <div className="info-label">Servings:
                        <span> {recipe.servings}</span>
                    </div>
                </CardActions>

                <CardActions className="tags-wrapper">
                    <div className="info-label">Tags:</div>
                    {renderTags(recipe.tags) }
                </CardActions>
            </Card>
        </div>
    );
};

RecipeContent.propTypes = {
    recipe: PropTypes.object.isRequired,
    user: PropTypes.object.isRequire
};

export default RecipeContent;
