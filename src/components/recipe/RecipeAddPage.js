import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';


const tastes = ['salty', 'savory', 'sour', 'bitter', 'spicy', 'sweet'];
const fields = ['image', 'title', 'description', 'calories', 'totalTime', 'rating', 'servings', 'ingredients[]'].concat(tastes);

class RecipeAddPage extends Component {

    onSubmit(props) {
        console.log(props);
    }

    render() {

        const {
            fields: {
                image, title, description, calories, totalTime,
                rating, servings, salty, savory, sour, bitter, spicy, sweet, ingredients
            },
            handleSubmit, resetForm, submitting, invalid
        } = this.props;
        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this)) }>
                        <div><TextField
                            floatingLabelText="Title"
                            fullWidth={true}
                            {...title}
                        />
                        </div>

                        <div>
                            <TextField
                                floatingLabelText="Description"
                                fullWidth={true}
                                multiLine={true}
                                rows={5}
                                {...description}
                            />
                        </div>


                        <div className="row between-xs">
                            <div className="col-sm-6 col-xs-12">
                                <TextField type="number" floatingLabelText="Calories" fullWidth={true} {...calories}/>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <TextField type="number" floatingLabelText="Total Time"
                                           fullWidth={true} {...totalTime}/>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <TextField type="number" floatingLabelText="Rating" fullWidth={true} {...rating}/>
                            </div>

                            <div className="col-sm-6 col-xs-12">
                                <TextField type="number" floatingLabelText="Servings" fullWidth={true} {...servings}/>
                            </div>
                        </div>

                        <h2>Ingredients</h2>
                        {ingredients.map((ingredient, index) => {
                            return (
                                <div key={index}>
                                    <div className="row">
                                        <div className="col-xs-10">
                                            <TextField
                                                floatingLabelText={`Ingredient ${index + 1}`}
                                                fullWidth={true}
                                                multiLine={true}
                                                {...ingredient}
                                            />

                                        </div>
                                        <div className="col-xs-2">
                                            <RaisedButton style={{alignItems: 'center'}} label="Remove" primary={true}
                                                          onTouchTap={() => {
                                                              ingredients.removeField(index);
                                                          }}/>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <RaisedButton label="Add Ingredient" primary={true} onTouchTap={() => {
                            ingredients.addField()
                        }}/>

                        <h2>Tastes</h2>
                        <div className="row">
                            {tastes.map((taste, index) => {
                                return (
                                    <div key={index} className="col-sm-2 col-xs-12">
                                        <TextField
                                            type="number"
                                            floatingLabelText={taste}
                                            fullWidth={true}
                                            {...taste}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <RaisedButton type="submit" label="Submit" primary={true} disabled={submitting || invalid}/>

                    </form>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {initialValues: {image: 'http://', title: 'rustan', calories: 5}};
}


export default reduxForm({
    form: 'recipeAddForm',
    fields
}, mapStateToProps)(RecipeAddPage)
