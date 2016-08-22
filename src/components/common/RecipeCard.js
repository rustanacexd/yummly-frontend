import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import LazyLoad from 'react-lazy-load';


const RecipeCard = ({recipe}) => {
    return (
        <div style={{
            paddingBottom: 20
        }}>
            <Card >
                <CardMedia
                    overlay={
                        <CardTitle
                            titleStyle={{fontSize: 16, textTransform: 'uppercase', lineHeight: '24px'}}
                            title={recipe.title}/>
                    }
                >
                    <LazyLoad height={300} offsetVertical={200}>
                        <img src={recipe.image} style={{height: 300, maxWidth: '100%'}}/>
                    </LazyLoad>

                </CardMedia>

                <CardText>
                    {recipe.description}
                </CardText>
                <CardActions>
                    <FlatButton label="See More" onTouchTap={() => {
                        browserHistory.push(`/recipe/${recipe.id}`);
                    } }/>
                    <FlatButton label={`Rating: ${recipe.rating} / 5`} style={{float: "right"}}/>
                </CardActions>

            </Card>
        </div>

    );
};

RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default RecipeCard;
